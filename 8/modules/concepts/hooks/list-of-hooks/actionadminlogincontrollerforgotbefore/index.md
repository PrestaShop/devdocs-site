---
title: "actionAdminLoginControllerForgotBefore"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionadminlogincontrollerforgotbefore/"
version: "8"
description: "This hook is launched before the initialization of the forgot action in login controller"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionAdminLoginControllerForgotBefore.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec(
            'actionAdminLoginControllerForgotBefore',
            [
                'controller' => $this,
                'email' => $email,
            ]
        )
```

