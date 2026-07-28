---
title: "actionAdminShippingPreferencesControllerPostProcessCarrierOptionsBefore"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionadminshippingpreferencescontrollerpostprocesscarrieroptionsbefore/"
version: "9"
description: "This hook is called on Admin Improve Shipping Preferences post-process before processing the Carrier Options form"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionAdminShippingPreferencesControllerPostProcessCarrierOptionsBefore.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
$this->dispatchHookWithParameters(
    'actionAdminShippingPreferencesControllerPostProcessCarrierOptionsBefore',
    ['controller' => $this]
);
```

