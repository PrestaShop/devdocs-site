---
title: "filterCategoryContent"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/filtercategorycontent/"
version: "9"
description: "This hook is called just before fetching content page category"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/filterCategoryContent.md"
---


{{% hookDescriptor %}}

## Parameters details

```php
    <?php
    array(
        'object' => (object) Category object
    ),
```

## Call of the Hook in the origin file

```php
$filteredCategory = Hook::exec(
    'filterCategoryContent',
    ['object' => $categoryVar],
    $id_module = null,
    $array_return = false,
    $check_exceptions = true,
    $use_push = false,
    $id_shop = null,
    $chain = true
);
```

