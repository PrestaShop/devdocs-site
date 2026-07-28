---
title: "Tax rules"
url: "https://devdocs.prestashop-project.org/1.7/webservice/resources/tax_rules/"
version: "1.7"
source: "https://github.com/PrestaShop/docs/blob/1.7.x/webservice/resources/tax_rules.md"
---


# Resources for Tax rules

### Tax_rule

|          Name          |    Format     | Required |    Description     |
| :--------------------- | :------------ | :------: | :----------------- |
| **id_tax_rules_group** | isUnsignedId  | ✔️       | Tax rules group ID |
| **id_state**           | isUnsignedId  | ❌        | State ID           |
| **id_country**         | isUnsignedId  | ✔️       | Country ID         |
| **zipcode_from**       | isPostCode    | ❌        |                    |
| **zipcode_to**         | isPostCode    | ❌        |                    |
| **id_tax**             | isUnsignedId  | ✔️       |                    |
| **behavior**           | isUnsignedInt | ❌        |                    |
| **description**        | isString      | ❌        |                    |


### Blank schema

```xml
<prestashop xmlns:xlink="http://www.w3.org/1999/xlink">
  <tax_rule>
    <id><![CDATA[]]></id>
    <id_tax_rules_group><![CDATA[]]></id_tax_rules_group>
    <id_state><![CDATA[]]></id_state>
    <id_country><![CDATA[]]></id_country>
    <zipcode_from><![CDATA[]]></zipcode_from>
    <zipcode_to><![CDATA[]]></zipcode_to>
    <id_tax><![CDATA[]]></id_tax>
    <behavior><![CDATA[]]></behavior>
    <description><![CDATA[]]></description>
  </tax_rule>
</prestashop>
```


