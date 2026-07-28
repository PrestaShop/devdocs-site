---
title: "actionCustomerAccountAdd"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actioncustomeraccountadd/"
version: "9"
description: "This hook is called when a new customer creates an account successfully"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionCustomerAccountAdd.md"
---


{{% hookDescriptor %}}

## Parameters details

```php
    <?php
    array(
      'newCustomer' => (object) Customer object
    );
```

## Call of the Hook in the origin file

```php
Hook::exec('actionCustomerAccountAdd', [ 'newCustomer' => $customer, ])
```

