---
title: "actionValidateOrderBefore"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionvalidateorderbefore/"
version: "9"
description: "This hook is called before validating an order by core"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionValidateOrderBefore.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionValidateOrderBefore', [
    'cart' => $this->context->cart,
    'customer' => $this->context->customer,
    'currency' => $this->context->currency,
    'id_order_state' => &$id_order_state,
    'payment_method' => $payment_method,
]);
```

