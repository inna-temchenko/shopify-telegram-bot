const express = require('express');
const crypto = require('crypto');

const app = express();

const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
const CHAT_ID = process.env.CHAT_ID;
const SHOPIFY_SECRET = process.env.SHOPIFY_SECRET;

function verifyShopifyWebhook(req, res, buf) {
  const hmac = req.headers['x-shopify-hmac-sha256'];
  const digest = crypto
    .createHmac('sha256', SHOPIFY_SECRET)
    .update(buf)
    .digest('base64');
  
  if (digest !== hmac) {
    res.sendStatus(401);
    throw new Error('Invalid webhook signature');
  }
}

app.use(express.json({ verify: verifyShopifyWebhook }));

app.post('/webhook', async (req, res) => {
  const order = req.body;
  if (!order || !ored.id) {
    return res.sendStatus(404);
  }
  console.log(JSON.stringify(order));
  const items = order?.line_items?.map(({ name, current_quantity }) => `${name} (${current_quantity}шт)`).join(', ');
  const recipient = order?.shipping_address ? `
  Ім'я: ${order.shipping_address?.first_name} ${order.shipping_address?.last_name}
  Номер телефону: ${order.shipping_address?.phone || 'не вказано'}
  Адреса: ${order.shipping_address?.city}, ${order.shipping_address?.address1}
  Номер квартири: ${order.shipping_address?.address2 || 'не вказано'}`
      : 
  `
  Ім'я: ${order.billing_address?.first_name} ${order.billing_address?.last_name}
  Номер телефону: ${order.billing_address?.phone || 'не вказано'}
  `;
  const deliveryInfo = order.shipping_lines[0].code === 'Local Delivery' ? "Доставка кур'єром" : order.shipping_lines[0].code === 'Freesia' ? 'Самовивіз' : 'Не вказано';
  
  const message = `
🌷 Нове замовлення!
Замовлення: #${order.order_number}
Номер телефону замовника: ${order.customer?.phone}
  
  📦 Інформація про отримувача ${recipient}
  
Тип доставки: ${deliveryInfo}
Товари: ${items}
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
