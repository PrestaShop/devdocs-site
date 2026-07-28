---
title: "actionAdminLoginControllerResetBefore"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionadminlogincontrollerresetbefore/"
version: "8"
description: "This hook is launched before the initialization of the reset action in login controller"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionAdminLoginControllerResetBefore.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec(
            'actionAdminLoginControllerResetBefore',
            [
                'controller' => $this,
                'reset_token_value' => $reset_token_value,
                'id_employee' => $id_employee,
                'reset_email' => $reset_email,
                'reset_password' => $reset_password,
                'reset_confirm' => $reset_confirm,
            ]
        )
```

