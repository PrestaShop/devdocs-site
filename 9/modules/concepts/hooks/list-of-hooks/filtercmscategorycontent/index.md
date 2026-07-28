---
title: "filterCmsCategoryContent"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/filtercmscategorycontent/"
version: "9"
description: "This hook is called just before fetching content page category"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/filterCmsCategoryContent.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
$filteredCmsCategoryContent = Hook::exec(
    'filterCmsCategoryContent',
    ['object' => $cmsCategoryVar],
    null,
    false,
    true,
    false,
    null,
    true
);
```

