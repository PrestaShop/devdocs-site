---
title: "Product features"
url: "https://devdocs.prestashop-project.org/1.7/webservice/resources/product_features/"
version: "1.7"
source: "https://github.com/PrestaShop/docs/blob/1.7.x/webservice/resources/product_features.md"
---


# Resources for Product features

### Product_feature

|     Name     |    Format     | Required | Max size | Description |
| :----------- | :------------ | :------: | -------: | :---------- |
| **position** | isInt         | ❌        |          |             |
| **name**     | isGenericName | ✔️       | 128      |             |


### Blank schema

```xml
<prestashop xmlns:xlink="http://www.w3.org/1999/xlink">
  <product_feature>
    <id><![CDATA[]]></id>
    <position><![CDATA[]]></position>
    <name>
      <language id="1"><![CDATA[]]></language>
      <language id="2"><![CDATA[]]></language>
    </name>
  </product_feature>
</prestashop>
```


