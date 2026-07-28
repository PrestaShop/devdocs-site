---
title: "actionOrderSlipAdd"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionorderslipadd/"
version: "9"
description: "This hook is called when a new credit slip is added regarding client order"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionOrderSlipAdd.md"
---


{{% hookDescriptor %}}

## Parameters details

```php
    <?php
    array(
      'order' => Order,
      'productList' => array(
        (int) product ID 1,
        (int) product ID 2, 
        ...,
        (int) product ID n
      ),
      'qtyList' => array(
        (int) quantity 1,
        (int) quantity 2,
        ...,
        (int) quantity n 
      )
    );
    The order of IDs and quantities is important!
```

## Call of the Hook in the origin file

```php
Hook::exec('actionOrderSlipAdd', [ 'order' => $order, 'productList' => $orderRefundSummary->getProductRefunds(), 'qtyList' => $fullQuantityList, 'orderSlipCreated' => $this->orderSlipCreated, ], null, false, true, false, $order->id_shop)
```

