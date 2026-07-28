---
title: "actionValidateStepComplete"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionvalidatestepcomplete/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionValidateStepComplete.md"
---


{{% hookDescriptor %}}

## Parameters details

```php
    <?php
    array(
      'step_name' => 'delivery',
      'request_params' => $requestParams,
      'completed' => &$isComplete,
    );
```

## Call of the Hook in the origin file

```php
Hook::exec(
    'actionValidateStepComplete',
    [
        'step_name' => 'delivery',
        'request_params' => $requestParams,
        'completed' => &$isComplete,
    ],
    Module::getModuleIdByName($currentDeliveryOption['external_module_name'])
);
```

