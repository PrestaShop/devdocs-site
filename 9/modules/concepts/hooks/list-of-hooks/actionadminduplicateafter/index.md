---
title: "actionAdminDuplicateAfter"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionadminduplicateafter/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionAdminDuplicateAfter.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
$this->hookDispatcher->dispatchWithParameters(
    'actionAdminDuplicateAfter',
    ['id_product' => $oldProductId, 'id_product_new' => $newProductId]
);
```

