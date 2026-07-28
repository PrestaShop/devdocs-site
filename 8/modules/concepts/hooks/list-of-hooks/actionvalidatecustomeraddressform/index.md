---
title: "actionValidateCustomerAddressForm"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionvalidatecustomeraddressform/"
version: "8"
description: "This hook is called when a customer submit its address form"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionValidateCustomerAddressForm.md"
---


{{% hookDescriptor %}}

## Parameters details

```php
    <?php
    array(
      'form' => (object) CustomerAddressForm
    );
```

## Call of the Hook in the origin file

```php
Hook::exec('actionValidateCustomerAddressForm', ['form' => $this])
```

