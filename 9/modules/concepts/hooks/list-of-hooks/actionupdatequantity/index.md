---
title: "actionUpdateQuantity"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionupdatequantity/"
version: "9"
description: "Quantity is updated only when a customer effectively places their order"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionUpdateQuantity.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec(
    'actionUpdateQuantity',
    [
        'id_product' => $id_product,
        'id_product_attribute' => $id_product_attribute,
        'quantity' => $stock_available->quantity,
        'delta_quantity' => $deltaQuantity ?? null,
        'id_shop' => $id_shop,
    ]
);
```

