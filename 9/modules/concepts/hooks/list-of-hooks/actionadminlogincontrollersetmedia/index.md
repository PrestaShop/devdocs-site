---
title: "actionAdminLoginControllerSetMedia"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionadminlogincontrollersetmedia/"
version: "9"
description: "This hook is called after adding media to admin login page header"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionAdminLoginControllerSetMedia.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
$this->hookDispatcher->dispatchWithParameters(
    'actionAdminLoginControllerSetMedia',
    [
        'controller' => $this->legacyControllerContext,
    ]
);
```

