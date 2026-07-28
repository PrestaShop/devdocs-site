---
title: "action\u003cController\u003eSetVariables"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actioncontrollersetvariables/"
version: "9"
description: "This hook is called after a Front Controller has set commonly used variables, available for use in the template. You can add/edit/remove variables from the array passed by reference. After the hook execution, this array of variables is assigned to Smarty."
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/action\u003cController\u003eSetVariables.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
$modulesVariables = array_merge(
    $modulesVariables,
    Hook::exec('action' . $this->getControllerName() . 'SetVariables',
        [
            'templateVars' => &$templateVars,
        ],
        null,
        true
    )
);
```

