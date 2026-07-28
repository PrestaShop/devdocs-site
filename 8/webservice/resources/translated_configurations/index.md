---
title: "Translated configurations"
url: "https://devdocs.prestashop-project.org/8/webservice/resources/translated_configurations/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/webservice/resources/translated_configurations.md"
---


# Resources for Translated configurations

### Translated_configuration

|       Name        |    Format    | Required | Max size |  Description  |
| :---------------- | :----------- | :------: | -------: | :------------ |
| **value**         |              | ❌        |          |               |
| **date_add**      | isDate       | ❌        |          |               |
| **date_upd**      | isDate       | ❌        |          |               |
| **name**          | isConfigName | ✔️       | 32       |               |
| **id_shop_group** | isUnsignedId | ❌        |          | Shop group ID |
| **id_shop**       | isUnsignedId | ❌        |          | Shop ID       |


### Blank schema

```xml
<prestashop xmlns:xlink="http://www.w3.org/1999/xlink">
  <translated_configuration>
    <id><![CDATA[]]></id>
    <value>
      <language id="1"><![CDATA[]]></language>
      <language id="2"><![CDATA[]]></language>
    </value>
    <date_add><![CDATA[]]></date_add>
    <date_upd><![CDATA[]]></date_upd>
    <name><![CDATA[]]></name>
    <id_shop_group><![CDATA[]]></id_shop_group>
    <id_shop><![CDATA[]]></id_shop>
  </translated_configuration>
</prestashop>
```


