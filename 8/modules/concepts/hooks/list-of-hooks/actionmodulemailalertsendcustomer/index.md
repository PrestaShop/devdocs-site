---
title: "actionModuleMailAlertSendCustomer"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionmodulemailalertsendcustomer/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionModuleMailAlertSendCustomer.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec(
    'actionModuleMailAlertSendCustomer',
    [
        'product' => $product_name,
        'link' => $product_link,
        'customer' => $customer,
        'product_obj' => $product,
    ]
)
```

