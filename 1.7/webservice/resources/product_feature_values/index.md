---
title: "Product feature values"
url: "https://devdocs.prestashop-project.org/1.7/webservice/resources/product_feature_values/"
version: "1.7"
source: "https://github.com/PrestaShop/docs/blob/1.7.x/webservice/resources/product_feature_values.md"
---


# Resources for Product feature values

### Product_feature_value

|      Name      |    Format     | Required | Max size | Description |
| :------------- | :------------ | :------: | -------: | :---------- |
| **id_feature** | isUnsignedId  | ✔️       |          |             |
| **custom**     | isBool        | ❌        |          |             |
| **value**      | isGenericName | ✔️       | 255      |             |


### Blank schema

```xml
<prestashop xmlns:xlink="http://www.w3.org/1999/xlink">
  <product_feature_value>
    <id><![CDATA[]]></id>
    <id_feature><![CDATA[]]></id_feature>
    <custom><![CDATA[]]></custom>
    <value>
      <language id="1"><![CDATA[]]></language>
      <language id="2"><![CDATA[]]></language>
    </value>
  </product_feature_value>
</prestashop>
```


