---
title: "validateCustomerFormFields"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/validatecustomerformfields/"
version: "8"
description: "This hook is called to a module when it has sent additional fields with additionalCustomerFormFields"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/validateCustomerFormFields.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('validateCustomerFormFields', ['fields' => $formFields], $moduleId, true)
```

