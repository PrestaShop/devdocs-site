---
title: "actionAdminShippingPreferencesControllerPostProcessBefore"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionadminshippingpreferencescontrollerpostprocessbefore/"
version: "9"
description: "This hook is called on Admin Improve Shipping Preferences post-process before processing any form"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionAdminShippingPreferencesControllerPostProcessBefore.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
$this->dispatchHookWithParameters(
    'actionAdminShippingPreferencesControllerPostProcessBefore',
    ['controller' => $this]
);
```

