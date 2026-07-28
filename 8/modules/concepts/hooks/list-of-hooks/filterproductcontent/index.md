---
title: "filterProductContent"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/filterproductcontent/"
version: "8"
description: "This hook is called just before fetching content page product"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/filterProductContent.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec(
                'filterProductContent',
                ['object' => $product_for_template],
                null,
                false,
                true,
                false,
                null,
                true
            )
```

