---
title: "actionControllerInitAfter"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actioncontrollerinitafter/"
version: "9"
description: "This hook is launched after the initialization of all controllers"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionControllerInitAfter.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec(
    'actionControllerInitAfter',
    [
        'controller' => $this,
    ]
);
```

