---
title: "Zones"
url: "https://devdocs.prestashop-project.org/9/webservice/resources/zones/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/webservice/resources/zones.md"
---


# Resources for Zones

### Zone

|    Name    |    Format     | Required | Max size | Description |
| :--------- | :------------ | :------: | -------: | :---------- |
| **name**   | isGenericName | ✔️       | 64       |             |
| **active** | isBool        | ❌        |          |             |


### Blank schema

```xml
<prestashop xmlns:xlink="http://www.w3.org/1999/xlink">
  <zone>
    <id><![CDATA[]]></id>
    <name><![CDATA[]]></name>
    <active><![CDATA[]]></active>
  </zone>
</prestashop>
```


