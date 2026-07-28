---
title: "actionValidateCustomerAddressForm"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionvalidatecustomeraddressform/"
version: "9"
description: "This hook is called when a customer submit its address form"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionValidateCustomerAddressForm.md"
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
Hook::exec('actionValidateCustomerAddressForm', ['form' => $this]);
```

