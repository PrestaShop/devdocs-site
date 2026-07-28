---
title: "actionFrontControllerSetVariablesBefore"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionfrontcontrollersetvariablesbefore/"
version: "9"
description: "Allows defining variables for the JavaScript object before the core does it."
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionFrontControllerSetVariablesBefore.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec(
    'actionFrontControllerSetVariablesBefore',
    [
        'templateVars' => &$templateVars,
        'cart' => $cart,
    ]
);
```

