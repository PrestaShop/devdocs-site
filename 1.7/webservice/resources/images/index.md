---
title: "Images"
url: "https://devdocs.prestashop-project.org/1.7/webservice/resources/images/"
version: "1.7"
source: "https://github.com/PrestaShop/docs/blob/1.7.x/webservice/resources/images.md"
---


# Resources for Images

### Image_types

|        Name        | Format | Required | Description |
| :----------------- | :----- | :------: | :---------- |
| **general**        |        | ❌        |             |
| **products**       |        | ❌        |             |
| **categories**     |        | ❌        |             |
| **manufacturers**  |        | ❌        |             |
| **suppliers**      |        | ❌        |             |
| **stores**         |        | ❌        |             |
| **customizations** |        | ❌        |             |


### Blank schema

```xml
<prestashop xmlns:xlink="http://www.w3.org/1999/xlink">
  <image_types>
    <general xlink:href="http://ps-develop.localhost/api/images/general" get="true" put="false" post="false" delete="false" head="true" upload_allowed_mimetypes="image/gif, image/jpg, image/jpeg, image/pjpeg, image/png, image/x-png"/>
    <products xlink:href="http://ps-develop.localhost/api/images/products" get="true" put="false" post="false" delete="false" head="true" upload_allowed_mimetypes="image/gif, image/jpg, image/jpeg, image/pjpeg, image/png, image/x-png"/>
    <categories xlink:href="http://ps-develop.localhost/api/images/categories" get="true" put="false" post="false" delete="false" head="true" upload_allowed_mimetypes="image/gif, image/jpg, image/jpeg, image/pjpeg, image/png, image/x-png"/>
    <manufacturers xlink:href="http://ps-develop.localhost/api/images/manufacturers" get="true" put="false" post="false" delete="false" head="true" upload_allowed_mimetypes="image/gif, image/jpg, image/jpeg, image/pjpeg, image/png, image/x-png"/>
    <suppliers xlink:href="http://ps-develop.localhost/api/images/suppliers" get="true" put="false" post="false" delete="false" head="true" upload_allowed_mimetypes="image/gif, image/jpg, image/jpeg, image/pjpeg, image/png, image/x-png"/>
    <stores xlink:href="http://ps-develop.localhost/api/images/stores" get="true" put="false" post="false" delete="false" head="true" upload_allowed_mimetypes="image/gif, image/jpg, image/jpeg, image/pjpeg, image/png, image/x-png"/>
    <customizations xlink:href="http://ps-develop.localhost/api/images/customizations" get="true" put="false" post="false" delete="false" head="true" upload_allowed_mimetypes="image/gif, image/jpg, image/jpeg, image/pjpeg, image/png, image/x-png"/>
  </image_types>
</prestashop>
```


