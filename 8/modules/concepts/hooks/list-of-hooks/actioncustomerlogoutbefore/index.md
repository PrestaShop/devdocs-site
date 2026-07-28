---
title: "actionCustomerLogoutBefore"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actioncustomerlogoutbefore/"
version: "8"
description: "This hook allows you to execute code before customer logout"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionCustomerLogoutBefore.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionCustomerLogoutBefore', ['customer' => $this])
```

