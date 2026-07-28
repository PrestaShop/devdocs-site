---
title: "filterProductContent"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/filterproductcontent/"
version: "9"
description: "This hook is called just before fetching content page product"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/filterProductContent.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
$filteredProduct = Hook::exec(
    'filterProductContent',
    ['object' => $product_for_template],
    null,
    false,
    true,
    false,
    null,
    true
);
```

