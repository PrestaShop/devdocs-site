---
title: "actionOverrideEmployeeImage"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionoverrideemployeeimage/"
version: "9"
description: "This hook is used to get the employee image"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionOverrideEmployeeImage.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec(
    'actionOverrideEmployeeImage',
    [
        'employee' => $this,
        'imageUrl' => &$imageUrl,
    ]
);
```

