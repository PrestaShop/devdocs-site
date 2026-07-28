---
title: "filterCmsContent"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/filtercmscontent/"
version: "9"
description: "This hook is called just before fetching content page"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/filterCmsContent.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
$filteredCmsContent = Hook::exec(
    'filterCmsContent',
    ['object' => $cmsVar],
    null,
    false,
    true,
    false,
    null,
    true
);
```

