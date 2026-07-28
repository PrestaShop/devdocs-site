---
title: "filterManufacturerContent"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/filtermanufacturercontent/"
version: "9"
description: "This hook is called just before fetching content page manufacturer"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/filterManufacturerContent.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
$filteredManufacturer = Hook::exec(
    'filterManufacturerContent',
    ['object' => $manufacturer],
    $id_module = null,
    $array_return = false,
    $check_exceptions = true,
    $use_push = false,
    $id_shop = null,
    $chain = true
);
```

