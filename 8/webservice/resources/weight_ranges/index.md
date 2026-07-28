---
title: "Weight ranges"
url: "https://devdocs.prestashop-project.org/8/webservice/resources/weight_ranges/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/webservice/resources/weight_ranges.md"
---


# Resources for Weight ranges

### Weight_range

|      Name      |     Format      | Required | Description |
| :------------- | :-------------- | :------: | :---------- |
| **id_carrier** | isInt           | ✔️       | Carrier ID  |
| **delimiter1** | isUnsignedFloat | ✔️       |             |
| **delimiter2** | isUnsignedFloat | ✔️       |             |


### Blank schema

```xml
<prestashop xmlns:xlink="http://www.w3.org/1999/xlink">
  <weight_range>
    <id><![CDATA[]]></id>
    <id_carrier><![CDATA[]]></id_carrier>
    <delimiter1><![CDATA[]]></delimiter1>
    <delimiter2><![CDATA[]]></delimiter2>
  </weight_range>
</prestashop>
```


