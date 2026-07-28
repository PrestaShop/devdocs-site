---
title: "actionAdminOrdersTrackingNumberUpdate"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionadminorderstrackingnumberupdate/"
version: "9"
description: "This hook allows you to execute code after the unique tracking number for the order was added"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionAdminOrdersTrackingNumberUpdate.md"
---


{{% hookDescriptor %}}

## Parameters details

```php
    <?php
    array(
      'order' => (Order),
      'customer' => (Customer),
      'carrier' => (Carrier)
    );
```

## Call of the Hook in the origin file

```php
Hook::exec('actionAdminOrdersTrackingNumberUpdate', [ 'order' => $order, 'customer' => $customer, 'carrier' => $carrier, ], null, false, true, false, $order->id_shop)
```

