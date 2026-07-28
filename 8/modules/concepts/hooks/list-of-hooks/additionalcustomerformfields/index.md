---
title: "additionalCustomerFormFields"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/additionalcustomerformfields/"
version: "8"
description: "This hook returns an array of FormFields to add them to the customer registration form"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/additionalCustomerFormFields.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('additionalCustomerFormFields', ['fields' => &$format], null, true)
```

