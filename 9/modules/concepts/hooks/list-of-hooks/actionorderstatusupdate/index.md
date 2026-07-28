---
title: "actionOrderStatusUpdate"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionorderstatusupdate/"
version: "9"
description: "This hook launches modules when the status of an order changes"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionOrderStatusUpdate.md"
---


{{% hookDescriptor %}}

## Parameters details

```php
    <?php
    array(
      'newOrderStatus' => (object) OrderState,
      'oldOrderStatus' => (object) OrderState,
      'id_order' => (int) Order ID
    );
```

## Call of the Hook in the origin file

```php
Hook::exec('actionOrderStatusUpdate', [ 'newOrderStatus' => $new_os, 'oldOrderStatus' => $old_os, 'id_order' => (int) $order->id, ], null, false, true, false, $order->id_shop)
```

