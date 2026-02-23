const express = require('express');
const app = express();
app.use(express.json());

const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

app.post('/webhook', async (req, res) => {
  const order = req.body;
  console.log(order)
  const message = `
🌷 Нове замовлення!
Номер замовлення: #${order.order_number}
Ім'я отримувача: ${order.billing_address?.first_name} ${order.billing_address?.last_name}
Телефон отримувача: ${order.billing_address?.phone || 'не вказано'}
Сума: ${order.total_price} ${order.currency}
Місто: ${order.billing_address?.city}
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
