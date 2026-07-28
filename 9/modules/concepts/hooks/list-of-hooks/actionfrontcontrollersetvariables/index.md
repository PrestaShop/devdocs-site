---
title: "actionFrontControllerSetVariables"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionfrontcontrollersetvariables/"
version: "9"
description: "Add variables to javascript object that is available in Front Office. These are also available in smarty templates in modules.your_module_name."
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionFrontControllerSetVariables.md"
---


{{% hookDescriptor %}}

## Parameters details

```php
      <?php
      array(
        'templateVars' => &(array)
      );
```php
    <?php
    public function hookActionFrontControllerSetVariables()
    {
        return [
            'your_variable_name' => 'Your variable value',
        ];
    }
```

## Call of the Hook in the origin file

```php
 $modulesVariables = Hook::exec(
    'actionFrontControllerSetVariables',
    [
        'templateVars' => &$templateVars,
    ],
    null,
    true
);
```

