---
title: "action\u003cController\u003eSetVariablesBefore"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actioncontrollersetvariablesbefore/"
version: "9"
description: "This hook is called before a Front Controller starts to set commonly used variables, that are going to be assigned to Smarty. You can add/edit/remove variables from the array passed by reference.."
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/action\u003cController\u003eSetVariablesBefore.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('action' . $this->getControllerName() . 'SetVariablesBefore',
    [
        'templateVars' => &$templateVars,
        'cart' => $cart,
    ]
);
```

