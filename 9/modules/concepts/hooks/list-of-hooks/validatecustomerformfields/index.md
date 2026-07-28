---
title: "validateCustomerFormFields"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/validatecustomerformfields/"
version: "9"
description: "This hook is called to a module when it has sent additional fields with additionalCustomerFormFields"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/validateCustomerFormFields.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
$validatedCustomerFormFields = Hook::exec('validateCustomerFormFields', ['fields' => $formFields], $moduleId, true)
```

