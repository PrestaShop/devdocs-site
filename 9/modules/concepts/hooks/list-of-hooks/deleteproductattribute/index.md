---
title: "deleteProductAttribute"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/deleteproductattribute/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/deleteProductAttribute.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec(
    'deleteProductAttribute',
    [
        'id_product_attribute' => $id_product_attribute,
        'id_product' => $this->id,
        'deleteAllAttributes' => false,
    ]
);
```

