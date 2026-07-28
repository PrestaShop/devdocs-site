---
title: "actionPaymentConfirmation"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionpaymentconfirmation/"
version: "9"
description: "This hook displays new elements after the payment is validated"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionPaymentConfirmation.md"
---


{{% hookDescriptor %}}

## Parameters details

```php
    <?php
    array(
      'id_order' => (int) Order ID
    );
```

## Call of the Hook in the origin file

```php
Hook::exec('actionPaymentConfirmation', ['id_order' => (int) $order->id], null, false, true, false, $order->id_shop)
```

