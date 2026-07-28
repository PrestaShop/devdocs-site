---
title: "additionalCustomerFormFields"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/additionalcustomerformfields/"
version: "9"
description: "This hook returns an array of FormFields to add them to the customer registration form"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/additionalCustomerFormFields.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
$additionalCustomerFormFields = Hook::exec('additionalCustomerFormFields', ['fields' => &$format], null, true)
```

