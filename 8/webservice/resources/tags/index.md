---
title: "Tags"
url: "https://devdocs.prestashop-project.org/8/webservice/resources/tags/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/webservice/resources/tags.md"
---


# Resources for Tags

### Tag

|    Name     |    Format     | Required | Max size | Description |
| :---------- | :------------ | :------: | -------: | :---------- |
| **id_lang** | isUnsignedId  | ✔️       |          | Lang ID     |
| **name**    | isGenericName | ✔️       | 32       |             |


### Blank schema

```xml
<prestashop xmlns:xlink="http://www.w3.org/1999/xlink">
  <tag>
    <id><![CDATA[]]></id>
    <id_lang><![CDATA[]]></id_lang>
    <name><![CDATA[]]></name>
  </tag>
</prestashop>
```


