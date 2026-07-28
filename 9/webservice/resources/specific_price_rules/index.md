---
title: "Specific price rules"
url: "https://devdocs.prestashop-project.org/9/webservice/resources/specific_price_rules/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/webservice/resources/specific_price_rules.md"
---


# Resources for Specific price rules

### Specific_price_rule

|        Name        |     Format      | Required | Description |
| :----------------- | :-------------- | :------: | :---------- |
| **id_shop**        | isUnsignedId    | ✔️       | Shop ID     |
| **id_country**     | isUnsignedId    | ✔️       | Country ID  |
| **id_currency**    | isUnsignedId    | ✔️       | Currency ID |
| **id_group**       | isUnsignedId    | ✔️       |             |
| **name**           | isCleanHtml     | ✔️       |             |
| **from_quantity**  | isUnsignedInt   | ✔️       |             |
| **price**          | isNegativePrice | ✔️       |             |
| **reduction**      | isPrice         | ✔️       |             |
| **reduction_tax**  | isBool          | ✔️       |             |
| **reduction_type** | isReductionType | ✔️       |             |
| **from**           | isDateFormat    | ❌        |             |
| **to**             | isDateFormat    | ❌        |             |


### Blank schema

```xml
<prestashop xmlns:xlink="http://www.w3.org/1999/xlink">
  <specific_price_rule>
    <id><![CDATA[]]></id>
    <id_shop><![CDATA[]]></id_shop>
    <id_country><![CDATA[]]></id_country>
    <id_currency><![CDATA[]]></id_currency>
    <id_group><![CDATA[]]></id_group>
    <name><![CDATA[]]></name>
    <from_quantity><![CDATA[]]></from_quantity>
    <price><![CDATA[]]></price>
    <reduction><![CDATA[]]></reduction>
    <reduction_tax><![CDATA[]]></reduction_tax>
    <reduction_type><![CDATA[]]></reduction_type>
    <from><![CDATA[]]></from>
    <to><![CDATA[]]></to>
  </specific_price_rule>
</prestashop>
```


