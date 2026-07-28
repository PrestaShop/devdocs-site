---
title: "actionOrderSlipAdd"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionorderslipadd/"
version: "8"
description: "This hook is called when a new credit slip is added regarding client order"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionOrderSlipAdd.md"
---


{{% hookDescriptor %}}

## Parameters details

```php
    <?php
    array(
      'order' => Order,
      'productList' => array(
        (int) order detail ID 1 => Order Slip Detail 1,
        (int) order detail ID 2 => Order Slip Detail 2,
        ...,
        (int) order detail ID n => Order Slip Detail n
      ),
      'qtyList' => array(
        (int) order detail ID 1 => (int) quantity 1,
        (int) order detail ID 2 => (int) quantity 2,
        ...,
        (int) order detail ID n => (int) quantity n 
      )
    );
```

## Call of the Hook in the origin file

```php
Hook::exec('actionOrderSlipAdd', [
                'order' => $order,
                'productList' => $orderRefundSummary->getProductRefunds(),
                'qtyList' => $fullQuantityList,
            ], null, false, true, false, $order->id_shop)
```

