---
title: "actionOrderStatusPostUpdate"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionorderstatuspostupdate/"
version: "8"
description: "Allows to be notified after order status is changed."
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionOrderStatusPostUpdate.md"
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
Hook::exec('actionOrderStatusPostUpdate', [
            'newOrderStatus' => $new_os,
            'oldOrderStatus' => $old_os,
            'id_order' => (int) $order->id,
        ], null, false, true, false, $order->id_shop)
```

