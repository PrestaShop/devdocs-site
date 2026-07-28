---
title: "actionAdminLoginControllerSetMedia"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionadminlogincontrollersetmedia/"
version: "8"
description: "This hook is called after adding media to admin login page header"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionAdminLoginControllerSetMedia.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec(
            'actionAdminLoginControllerSetMedia',
            [
                'controller' => $this,
            ]
        )
```

