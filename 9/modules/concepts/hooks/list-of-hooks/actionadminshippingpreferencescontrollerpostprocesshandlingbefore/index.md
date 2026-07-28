---
title: "actionAdminShippingPreferencesControllerPostProcessHandlingBefore"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionadminshippingpreferencescontrollerpostprocesshandlingbefore/"
version: "9"
description: "This hook is called on Admin Improve Shipping Preferences post-process before processing the Handling form"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionAdminShippingPreferencesControllerPostProcessHandlingBefore.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
$this->dispatchHookWithParameters(
    'actionAdminShippingPreferencesControllerPostProcessHandlingBefore',
    ['controller' => $this]
);
```

