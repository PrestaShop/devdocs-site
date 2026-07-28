---
title: "actionAdminLoginControllerBefore"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionadminlogincontrollerbefore/"
version: "8"
description: "This hook is launched before the initialization of the login controller"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionAdminLoginControllerBefore.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec(
            'actionAdminLoginControllerBefore',
            [
                'controller' => $this,
            ]
        )
```

