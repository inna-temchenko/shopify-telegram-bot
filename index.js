const express = require('express');
const app = express();
app.use(express.json());

const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

app.post('/webhook', async (req, res) => {
  const order = req.body;
  
  const message = `
🛍 Нове замовлення!
📦 Номер: #${order.order_number}
👤 Клієнт: ${order.billing_address?.first_name} ${order.billing_address?.last_name}
📱 Телефон: ${order.billing_address?.phone || 'не вказано'}
💰 Сума: ${order.total_price} ${order.currency}
📍 Місто: ${order.billing_address?.city}
  `;

  await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: CHAT_ID, text: message })
  });

  res.sendStatus(200);
});

app.listen(process.env.PORT || 3000);
