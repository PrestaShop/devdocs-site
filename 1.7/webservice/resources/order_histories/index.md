---
title: "Order histories"
url: "https://devdocs.prestashop-project.org/1.7/webservice/resources/order_histories/"
version: "1.7"
source: "https://github.com/PrestaShop/docs/blob/1.7.x/webservice/resources/order_histories.md"
---


# Resources for Order histories

### Order_history

|        Name        |    Format    | Required | Description |
| :----------------- | :----------- | :------: | :---------- |
| **id_employee**    | isUnsignedId | ❌        | Employee ID |
| **id_order_state** | isUnsignedId | ✔️       |             |
| **id_order**       | isUnsignedId | ✔️       | Order ID    |
| **date_add**       | isDate       | ❌        |             |


### Blank schema

```xml
<prestashop xmlns:xlink="http://www.w3.org/1999/xlink">
  <order_history>
    <id><![CDATA[]]></id>
    <id_employee><![CDATA[]]></id_employee>
    <id_order_state><![CDATA[]]></id_order_state>
    <id_order><![CDATA[]]></id_order>
    <date_add><![CDATA[]]></date_add>
  </order_history>
</prestashop>
```


