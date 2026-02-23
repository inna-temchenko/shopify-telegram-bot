const express = require('express');
const app = express();
app.use(express.json());

const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

app.post('/webhook', async (req, res) => {
  const order = req.body;
  console.log(order)
  const recipient = order?.shipping_address ? `
    📦 Інформація про отримувача
    Ім'я: ${order.shipping_address?.first_name} ${order.shipping_address?.last_name}
    Номер телефону: ${order.shipping_address?.phone || 'не вказано'}
    Адреса: ${order.shipping_address?.city}, ${order.shipping_address?.address1}
    Номер квартири: ${order.shipping_address?.address2 || 'не вказано'}
    ======================
  ` : '';
  const deliveryInfo = order.shipping_lines.code === 'Local Delivery' ? "Доставка" : order.shipping_lines.code === 'Freesia' ? 'Самовивіз' : 'Не вказано';
  
  const message = `
🌷 Нове замовлення!
Замовлення: #${order.order_number}
Номер телефону замовника: ${order.customer?.phone}
${recipient}
Тип доставки: ${deliveryInfo}
Сума: ${order.total_price} ${order.currency}
  `;

  await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: CHAT_ID, text: message })
  });

  res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
