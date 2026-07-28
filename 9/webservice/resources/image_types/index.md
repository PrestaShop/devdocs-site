---
title: "Image types"
url: "https://devdocs.prestashop-project.org/9/webservice/resources/image_types/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/webservice/resources/image_types.md"
---


# Resources for Image types

### Image_type

|       Name        |     Format      | Required | Max size | Description |
| :---------------- | :-------------- | :------: | -------: | :---------- |
| **name**          | isImageTypeName | ✔️       | 64       |             |
| **width**         | isImageSize     | ✔️       |          |             |
| **height**        | isImageSize     | ✔️       |          |             |
| **categories**    | isBool          | ❌        |          |             |
| **products**      | isBool          | ❌        |          |             |
| **manufacturers** | isBool          | ❌        |          |             |
| **suppliers**     | isBool          | ❌        |          |             |
| **stores**        | isBool          | ❌        |          |             |


### Blank schema

```xml
<prestashop xmlns:xlink="http://www.w3.org/1999/xlink">
  <image_type>
    <id><![CDATA[]]></id>
    <name><![CDATA[]]></name>
    <width><![CDATA[]]></width>
    <height><![CDATA[]]></height>
    <categories><![CDATA[]]></categories>
    <products><![CDATA[]]></products>
    <manufacturers><![CDATA[]]></manufacturers>
    <suppliers><![CDATA[]]></suppliers>
    <stores><![CDATA[]]></stores>
  </image_type>
</prestashop>
```


