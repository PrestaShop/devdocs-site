---
title: "actionProductCancel"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionproductcancel/"
version: "9"
description: "This hook is called when you cancel a product in an order"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionProductCancel.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionProductCancel', ['order' => $order, 'id_order_detail' => (int) $orderDetail->id_order_detail, 'cancel_quantity' => $qty_cancel_product, 'action' => CancellationActionType::CANCEL_PRODUCT], null, false, true, false, $order->id_shop)
```

