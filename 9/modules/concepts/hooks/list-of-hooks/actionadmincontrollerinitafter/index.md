---
title: "actionAdminControllerInitAfter"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionadmincontrollerinitafter/"
version: "9"
description: "This hook is launched after the initialization of all admin controllers"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionAdminControllerInitAfter.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec(
    'actionAdminControllerInitAfter',
    [
        'controller' => $this,
    ]
);
```

