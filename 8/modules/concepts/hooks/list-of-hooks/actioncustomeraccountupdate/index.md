---
title: "actionCustomerAccountUpdate"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actioncustomeraccountupdate/"
version: "8"
description: "This hook is called when a customer updates its account successfully"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionCustomerAccountUpdate.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionCustomerAccountUpdate', [
                'customer' => $customer,
            ])
```

