---
title: "actionAdminControllerInitBefore"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionadmincontrollerinitbefore/"
version: "8"
description: "This hook is launched before the initialization of all admin controllers"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionAdminControllerInitBefore.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec(
            'actionAdminControllerInitBefore',
            [
                'controller' => $this,
            ]
        )
```

