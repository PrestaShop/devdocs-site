---
title: "actionFrontControllerDetectContextCountryAfter"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionfrontcontrollerdetectcontextcountryafter/"
version: "9"
description: "Allows modules to modify the context country after it has been detected via geolocation."
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionFrontControllerDetectContextCountryAfter.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec(
    'actionFrontControllerDetectContextCountryAfter',
    [
        'controller' => $this,
    ]
);
```

