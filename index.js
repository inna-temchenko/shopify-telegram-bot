const express = require('express');
const app = express();
app.use(express.json());

const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

app.post('/webhook', async (req, res) => {
  //const order = req.body;
  const order = {
   "id":6140845817914,
   "admin_graphql_api_id":"gid://shopify/Order/6140845817914",
   "app_id":580111,
   "browser_ip":"176.36.198.138",
   "buyer_accepts_marketing":false,
   "cancel_reason":null,
   "cancelled_at":null,
   "cart_token":"hWN97kC0r3lODrpnMFdYStKk",
   "checkout_id":33876224606266,
   "checkout_token":"47c32419f9d29427850b4510dfe7623f",
   "client_details":{
      "accept_language":"uk-UA",
      "browser_height":null,
      "browser_ip":"176.36.198.138",
      "browser_width":null,
      "session_hash":null,
      "user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36"
   },
   "closed_at":null,
   "confirmation_number":"Q0KN0F2FM",
   "confirmed":true,
   "contact_email":null,
   "created_at":"2026-02-23T19:29:10+02:00",
   "currency":"UAH",
   "current_shipping_price_set":{
      "shop_money":{
         "amount":"200.00",
         "currency_code":"UAH"
      },
      "presentment_money":{
         "amount":"200.00",
         "currency_code":"UAH"
      }
   },
   "current_subtotal_price":"0.00",
   "current_subtotal_price_set":{
      "shop_money":{
         "amount":"0.00",
         "currency_code":"UAH"
      },
      "presentment_money":{
         "amount":"0.00",
         "currency_code":"UAH"
      }
   },
   "current_total_additional_fees_set":null,
   "current_total_discounts":"0.00",
   "current_total_discounts_set":{
      "shop_money":{
         "amount":"0.00",
         "currency_code":"UAH"
      },
      "presentment_money":{
         "amount":"0.00",
         "currency_code":"UAH"
      }
   },
   "current_total_duties_set":null,
   "current_total_price":"200.00",
   "current_total_price_set":{
      "shop_money":{
         "amount":"200.00",
         "currency_code":"UAH"
      },
      "presentment_money":{
         "amount":"200.00",
         "currency_code":"UAH"
      }
   },
   "current_total_tax":"0.00",
   "current_total_tax_set":{
      "shop_money":{
         "amount":"0.00",
         "currency_code":"UAH"
      },
      "presentment_money":{
         "amount":"0.00",
         "currency_code":"UAH"
      }
   },
   "customer_locale":"uk-UA",
   "device_id":null,
   "discount_codes":[
      
   ],
   "duties_included":false,
   "email":"",
   "estimated_taxes":false,
   "financial_status":"pending",
   "fulfillment_status":null,
   "landing_site":"/password",
   "landing_site_ref":null,
   "location_id":null,
   "merchant_business_entity_id":"19634126906",
   "merchant_of_record_app_id":null,
   "name":"#1016",
   "note":null,
   "note_attributes":[
      
   ],
   "number":16,
   "order_number":1016,
   "order_status_url":"https://freesia.ua/58890649658/orders/be7f489fb69a99bad1985b6667b40818/authenticate?key=753cab8781f4bd1eb96d975578bd4d2b",
   "original_total_additional_fees_set":null,
   "original_total_duties_set":null,
   "payment_gateway_names":[
      "Онлайн оплата карткою (ApplePay, GooglePay)"
   ],
   "phone":"+380635154973",
   "po_number":null,
   "presentment_currency":"UAH",
   "processed_at":"2026-02-23T19:29:09+02:00",
   "reference":null,
   "referring_site":"https://admin.shopify.com/",
   "source_identifier":null,
   "source_name":"web",
   "source_url":null,
   "subtotal_price":"0.00",
   "subtotal_price_set":{
      "shop_money":{
         "amount":"0.00",
         "currency_code":"UAH"
      },
      "presentment_money":{
         "amount":"0.00",
         "currency_code":"UAH"
      }
   },
   "tags":"",
   "tax_exempt":false,
   "tax_lines":[
      
   ],
   "taxes_included":true,
   "test":false,
   "token":"be7f489fb69a99bad1985b6667b40818",
   "total_cash_rounding_payment_adjustment_set":{
      "shop_money":{
         "amount":"0.00",
         "currency_code":"UAH"
      },
      "presentment_money":{
         "amount":"0.00",
         "currency_code":"UAH"
      }
   },
   "total_cash_rounding_refund_adjustment_set":{
      "shop_money":{
         "amount":"0.00",
         "currency_code":"UAH"
      },
      "presentment_money":{
         "amount":"0.00",
         "currency_code":"UAH"
      }
   },
   "total_discounts":"0.00",
   "total_discounts_set":{
      "shop_money":{
         "amount":"0.00",
         "currency_code":"UAH"
      },
      "presentment_money":{
         "amount":"0.00",
         "currency_code":"UAH"
      }
   },
   "total_line_items_price":"0.00",
   "total_line_items_price_set":{
      "shop_money":{
         "amount":"0.00",
         "currency_code":"UAH"
      },
      "presentment_money":{
         "amount":"0.00",
         "currency_code":"UAH"
      }
   },
   "total_outstanding":"200.00",
   "total_price":"200.00",
   "total_price_set":{
      "shop_money":{
         "amount":"200.00",
         "currency_code":"UAH"
      },
      "presentment_money":{
         "amount":"200.00",
         "currency_code":"UAH"
      }
   },
   "total_shipping_price_set":{
      "shop_money":{
         "amount":"200.00",
         "currency_code":"UAH"
      },
      "presentment_money":{
         "amount":"200.00",
         "currency_code":"UAH"
      }
   },
   "total_tax":"0.00",
   "total_tax_set":{
      "shop_money":{
         "amount":"0.00",
         "currency_code":"UAH"
      },
      "presentment_money":{
         "amount":"0.00",
         "currency_code":"UAH"
      }
   },
   "total_tip_received":"0.00",
   "total_weight":0,
   "updated_at":"2026-02-23T19:29:11+02:00",
   "user_id":null,
   "billing_address":{
      "first_name":"Інна",
      "address1":"Не щнаю",
      "phone":"0635154973",
      "city":"Київ",
      "zip":"01001",
      "province":null,
      "country":"Ukraine",
      "last_name":"Тем",
      "address2":"Номер",
      "company":null,
      "latitude":50.4299751,
      "longitude":30.36494189999999,
      "name":"Інна Тем",
      "country_code":"UA",
      "province_code":null
   },
   "customer":{
      "id":8115962347578,
      "created_at":"2026-02-23T12:47:35+02:00",
      "updated_at":"2026-02-23T19:29:10+02:00",
      "first_name":"Інна",
      "last_name":"Інна",
      "state":"disabled",
      "note":null,
      "verified_email":true,
      "multipass_identifier":null,
      "tax_exempt":false,
      "email":null,
      "phone":"+380635154973",
      "currency":"UAH",
      "tax_exemptions":[
         
      ],
      "admin_graphql_api_id":"gid://shopify/Customer/8115962347578",
      "default_address":{
         "id":8841960620090,
         "customer_id":8115962347578,
         "first_name":"Інна",
         "last_name":"Тем",
         "company":null,
         "address1":"Не щнаю",
         "address2":"Номер",
         "city":"Київ",
         "province":null,
         "country":"Ukraine",
         "zip":"01001",
         "phone":"0635154973",
         "name":"Інна Тем",
         "province_code":null,
         "country_code":"UA",
         "country_name":"Ukraine",
         "default":true
      }
   },
   "discount_applications":[
      
   ],
   "fulfillments":[
      
   ],
   "line_items":[
      {
         "id":15355438759994,
         "admin_graphql_api_id":"gid://shopify/LineItem/15355438759994",
         "attributed_staffs":[
            
         ],
         "current_quantity":1,
         "fulfillable_quantity":1,
         "fulfillment_service":"manual",
         "fulfillment_status":null,
         "gift_card":false,
         "grams":0,
         "name":"Тест",
         "price":"0.00",
         "price_set":{
            "shop_money":{
               "amount":"0.00",
               "currency_code":"UAH"
            },
            "presentment_money":{
               "amount":"0.00",
               "currency_code":"UAH"
            }
         },
         "product_exists":true,
         "product_id":7509149319226,
         "properties":[
            {
               "name":"Опція «Сюрприз»",
               "value":"Ні"
            },
            {
               "name":"Не зв'язуватись зі мною",
               "value":"Ні"
            },
            {
               "name":"Отримати фото перед доставкою",
               "value":"Ні"
            },
            {
               "name":"Додати листівку",
               "value":""
            }
         ],
         "quantity":1,
         "requires_shipping":true,
         "sales_line_item_group_id":null,
         "sku":null,
         "taxable":true,
         "title":"Тест",
         "total_discount":"0.00",
         "total_discount_set":{
            "shop_money":{
               "amount":"0.00",
               "currency_code":"UAH"
            },
            "presentment_money":{
               "amount":"0.00",
               "currency_code":"UAH"
            }
         },
         "variant_id":41259733057594,
         "variant_inventory_management":null,
         "variant_title":null,
         "vendor":"Freesia",
         "tax_lines":[
            {
               "channel_liable":false,
               "price":"0.00",
               "price_set":{
                  "shop_money":{
                     "amount":"0.00",
                     "currency_code":"UAH"
                  },
                  "presentment_money":{
                     "amount":"0.00",
                     "currency_code":"UAH"
                  }
               },
               "rate":0.2,
               "title":"PDV"
            }
         ],
         "duties":[
            
         ],
         "discount_allocations":[
            
         ]
      }
   ],
   "payment_terms":null,
   "refunds":[
      
   ],
   "shipping_address":{
      "first_name":"Інна",
      "address1":"Не щнаю",
      "phone":"0635154973",
      "city":"Київ",
      "zip":"01001",
      "province":null,
      "country":"Ukraine",
      "last_name":"Тем",
      "address2":"Номер",
      "company":null,
      "latitude":50.4299751,
      "longitude":30.36494189999999,
      "name":"Інна Тем",
      "country_code":"UA",
      "province_code":null
   },
   "shipping_lines":[
      {
         "id":5096779972666,
         "carrier_identifier":null,
         "code":"Local Delivery",
         "current_discounted_price_set":{
            "shop_money":{
               "amount":"200.00",
               "currency_code":"UAH"
            },
            "presentment_money":{
               "amount":"200.00",
               "currency_code":"UAH"
            }
         },
         "discounted_price":"200.00",
         "discounted_price_set":{
            "shop_money":{
               "amount":"200.00",
               "currency_code":"UAH"
            },
            "presentment_money":{
               "amount":"200.00",
               "currency_code":"UAH"
            }
         },
         "is_removed":false,
         "phone":"+380635154973",
         "price":"200.00",
         "price_set":{
            "shop_money":{
               "amount":"200.00",
               "currency_code":"UAH"
            },
            "presentment_money":{
               "amount":"200.00",
               "currency_code":"UAH"
            }
         },
         "requested_fulfillment_service_id":null,
         "source":"shopify",
         "title":"Local Delivery",
         "tax_lines":[
            
         ],
         "discount_allocations":[
            
         ]
      }
   ],
   "returns":[
      
   ],
   "line_item_groups":[
      
   ]
};
  console.log(JSON.stringify(order));
  const items = order?.line_items?.map(({ name, current_quantity }) => `${name} ${current_quantity}шт.`).join(', ');
  const recipient = order?.shipping_address ? `
    Ім'я: ${order.shipping_address?.first_name} ${order.shipping_address?.last_name}
    Номер телефону: ${order.shipping_address?.phone || 'не вказано'}
    Адреса: ${order.shipping_address?.city}, ${order.shipping_address?.address1}
    Номер квартири: ${order.shipping_address?.address2 || 'не вказано'}
      ` : `
    Ім'я: ${order.billing_address?.first_name} ${order.billing_address?.last_name}
    Номер телефону: ${order.billing_address?.phone || 'не вказано'}
  `;
  const deliveryInfo = order.shipping_lines[0].code === 'Local Delivery' ? "Доставка кур'єром" : order.shipping_lines[0].code === 'Freesia' ? 'Самовивіз' : 'Не вказано';
 
  const message = `
    🌷 Нове замовлення!
    Замовлення: #${order.order_number}
    Номер телефону замовника: ${order.customer?.phone}
      📦 Інформація про отримувача
      ${recipient}
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
