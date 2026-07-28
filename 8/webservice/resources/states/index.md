---
title: "States"
url: "https://devdocs.prestashop-project.org/8/webservice/resources/states/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/webservice/resources/states.md"
---


# Resources for States

### State

|      Name      |     Format     | Required | Max size | Description |
| :------------- | :------------- | :------: | -------: | :---------- |
| **id_zone**    | isUnsignedId   | ✔️       |          | Zone ID     |
| **id_country** | isUnsignedId   | ✔️       |          | Country ID  |
| **iso_code**   | isStateIsoCode | ✔️       | 7        |             |
| **name**       | isGenericName  | ✔️       | 32       |             |
| **active**     | isBool         | ❌        |          |             |


### Blank schema

```xml
<prestashop xmlns:xlink="http://www.w3.org/1999/xlink">
  <state>
    <id><![CDATA[]]></id>
    <id_zone><![CDATA[]]></id_zone>
    <id_country><![CDATA[]]></id_country>
    <iso_code><![CDATA[]]></iso_code>
    <name><![CDATA[]]></name>
    <active><![CDATA[]]></active>
  </state>
</prestashop>
```


