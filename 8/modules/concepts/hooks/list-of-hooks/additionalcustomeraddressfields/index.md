---
title: "additionalCustomerAddressFields"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/additionalcustomeraddressfields/"
version: "8"
description: "This hook returns an array of FormFields to add them to the customer address registration form"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/additionalCustomerAddressFields.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('additionalCustomerAddressFields', ['fields' => &$format], null, true)
```

