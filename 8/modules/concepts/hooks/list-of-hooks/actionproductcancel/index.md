---
title: "actionProductCancel"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionproductcancel/"
version: "8"
description: "This hook is called when you cancel a product in an order"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionProductCancel.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionProductCancel', ['order' => $order, 'id_order_detail' => (int) $orderDetailId, 'cancel_quantity' => $productRefund['quantity'], 'action' => CancellationActionType::STANDARD_REFUND], null, false, true, false, $order->id_shop)
```

