---
title: "Configurations"
url: "https://devdocs.prestashop-project.org/9/webservice/resources/configurations/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/webservice/resources/configurations.md"
---


# Resources for Configurations

### Configuration

|       Name        |    Format    | Required | Max size |  Description  |
| :---------------- | :----------- | :------: | -------: | :------------ |
| **value**         |              | ❌        |          |               |
| **name**          | isConfigName | ✔️       | 254      |               |
| **id_shop_group** | isUnsignedId | ❌        |          | Shop group ID |
| **id_shop**       | isUnsignedId | ❌        |          | Shop ID       |
| **date_add**      | isDate       | ❌        |          |               |
| **date_upd**      | isDate       | ❌        |          |               |


### Blank schema

```xml
<prestashop xmlns:xlink="http://www.w3.org/1999/xlink">
  <configuration>
    <id><![CDATA[]]></id>
    <value><![CDATA[]]></value>
    <name><![CDATA[]]></name>
    <id_shop_group><![CDATA[]]></id_shop_group>
    <id_shop><![CDATA[]]></id_shop>
    <date_add><![CDATA[]]></date_add>
    <date_upd><![CDATA[]]></date_upd>
  </configuration>
</prestashop>
```


