---
title: "actionFrontControllerInitContextCurrencyAfter"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionfrontcontrollerinitcontextcurrencyafter/"
version: "9"
description: "Allows modules to modify the context currency after it has been initialized."
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionFrontControllerInitContextCurrencyAfter.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec(
    'actionFrontControllerInitContextCurrencyAfter',
    [
        'controller' => $this,
    ]
);
```

