---
title: "productSearchProvider"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/productsearchprovider/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/productSearchProvider.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec(
            'productSearchProvider',
            ['query' => $query],
            null,
            true
        )
```

