---
title: "filterSupplierContent"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/filtersuppliercontent/"
version: "9"
description: "This hook is called just before fetching content page supplier"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/filterSupplierContent.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
$filteredSupplier = Hook::exec(
    'filterSupplierContent',
    ['object' => $supplierVar],
    null,
    false,
    true,
    false,
    null,
    true
);
```

