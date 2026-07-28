---
title: "Price ranges"
url: "https://devdocs.prestashop-project.org/8/webservice/resources/price_ranges/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/webservice/resources/price_ranges.md"
---


# Resources for Price ranges

### Price_range

|      Name      |     Format      | Required | Description |
| :------------- | :-------------- | :------: | :---------- |
| **id_carrier** | isInt           | ✔️       | Carrier ID  |
| **delimiter1** | isUnsignedFloat | ✔️       |             |
| **delimiter2** | isUnsignedFloat | ✔️       |             |


### Blank schema

```xml
<prestashop xmlns:xlink="http://www.w3.org/1999/xlink">
  <price_range>
    <id><![CDATA[]]></id>
    <id_carrier><![CDATA[]]></id_carrier>
    <delimiter1><![CDATA[]]></delimiter1>
    <delimiter2><![CDATA[]]></delimiter2>
  </price_range>
</prestashop>
```


