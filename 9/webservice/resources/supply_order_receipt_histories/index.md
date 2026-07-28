---
title: "Supply order receipt histories"
url: "https://devdocs.prestashop-project.org/9/webservice/resources/supply_order_receipt_histories/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/webservice/resources/supply_order_receipt_histories.md"
---


# Resources for Supply order receipt histories

### Supply_order_receipt_history

|            Name            |    Format     | Required | Description |
| :------------------------- | :------------ | :------: | :---------- |
| **id_supply_order_detail** | isUnsignedId  | ✔️       |             |
| **id_employee**            | isUnsignedId  | ✔️       | Employee ID |
| **id_supply_order_state**  | isUnsignedId  | ✔️       |             |
| **employee_firstname**     | isName        | ❌        |             |
| **employee_lastname**      | isName        | ❌        |             |
| **quantity**               | isUnsignedInt | ✔️       |             |
| **date_add**               | isDate        | ❌        |             |


### Blank schema

```xml
<prestashop xmlns:xlink="http://www.w3.org/1999/xlink">
  <supply_order_receipt_history>
    <id><![CDATA[]]></id>
    <id_supply_order_detail><![CDATA[]]></id_supply_order_detail>
    <id_employee><![CDATA[]]></id_employee>
    <id_supply_order_state><![CDATA[]]></id_supply_order_state>
    <employee_firstname><![CDATA[]]></employee_firstname>
    <employee_lastname><![CDATA[]]></employee_lastname>
    <quantity><![CDATA[]]></quantity>
    <date_add><![CDATA[]]></date_add>
  </supply_order_receipt_history>
</prestashop>
```


