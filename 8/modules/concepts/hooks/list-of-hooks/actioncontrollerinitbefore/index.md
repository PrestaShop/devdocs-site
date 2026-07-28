---
title: "actionControllerInitBefore"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actioncontrollerinitbefore/"
version: "8"
description: "This hook is launched before the initialization of all controllers"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionControllerInitBefore.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec(
            'actionControllerInitBefore',
            [
                'controller' => $this,
            ]
        )
```

