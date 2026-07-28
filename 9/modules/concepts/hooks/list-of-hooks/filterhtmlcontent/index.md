---
title: "filterHtmlContent"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/filterhtmlcontent/"
version: "9"
description: "This hook is called just before fetching a page on HTML field"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/filterHtmlContent.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
$filteredHtml = Hook::exec(
    'filterHtmlContent',
    [
        'type' => $type,
        'htmlFields' => $htmlFields,
        'object' => $presentedObject,
    ],
    null,
    false,
    true,
    false,
    null,
    true
);
```

