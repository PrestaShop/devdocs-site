---
title: "productSearchProvider"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/productsearchprovider/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/productSearchProvider.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
$providers = Hook::exec(
    'productSearchProvider',
    ['query' => $query],
    null,
    true
);
```

