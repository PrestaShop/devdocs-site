---
title: "actionAdminLoginControllerLoginAfter"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionadminlogincontrollerloginafter/"
version: "8"
description: "This hook is launched after the initialization of the login action in login controller"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionAdminLoginControllerLoginAfter.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec(
                    'actionAdminLoginControllerLoginAfter',
                    [
                        'controller' => $this,
                        'employee' => $this->context->employee,
                        'redirect' => $url,
                    ]
                )
```

