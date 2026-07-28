---
title: "actionValidateOrderAfter"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionvalidateorderafter/"
version: "9"
description: "This hook is called after validating an order by core"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionValidateOrderAfter.md"
---


{{% hookDescriptor %}}

## Parameters details

```php
    <?php
    [
        'cart' => (Cart|null) $contextCart,
        'order' => (Order|null) $order,
        'orders' => (array) $orderList,
        'customer' => (Customer) $contextCustomer,
        'currency' => (Currency) $contextCurrency,
        'orderStatus' => (OrderState) $orderState,
    ]
```

## Call of the Hook in the origin file

```php
Hook::exec(
    'actionValidateOrderAfter',
    [
        'cart' => $this->context->cart,
        'order' => $order ?? null,
        'orders' => $order_list,
        'customer' => $this->context->customer,
        'currency' => $this->context->currency,
        'orderStatus' => new OrderState(isset($order) ? $order->current_state : null),
    ]
);
```

