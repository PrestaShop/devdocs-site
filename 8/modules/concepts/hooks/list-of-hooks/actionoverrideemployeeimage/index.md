---
title: "actionOverrideEmployeeImage"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionoverrideemployeeimage/"
version: "8"
description: "This hook is used to get the employee image"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionOverrideEmployeeImage.md"
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
        )
```

