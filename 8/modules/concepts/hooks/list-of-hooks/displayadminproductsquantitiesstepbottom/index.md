---
title: "displayAdminProductsQuantitiesStepBottom"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/displayadminproductsquantitiesstepbottom/"
version: "8"
description: "This hook launches modules when the back office product page is displayed"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/displayAdminProductsQuantitiesStepBottom.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
{{ renderhook('displayAdminProductsQuantitiesStepBottom', { 'id_product': productId }) }}
```

## Example implementation

This hook has been implemented as an example in our [modules examples repository - demovieworderhooks](https://github.com/PrestaShop/example-modules/tree/8.x/demovieworderhooks).

