---
title: "actionOverrideProductQuantity"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionoverrideproductquantity/"
version: "9"
description: "Allows modules to override the final product quantity returned by Product::getQuantity(), including cart-aware calculations."
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionOverrideProductQuantity.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec(
            'actionOverrideProductQuantity',
            [
                'id_product' => $idProduct,
                'id_product_attribute' => $idProductAttribute,
                'cart' => $cart,
                'cacheIsPack' => $cacheIsPack,
                'idCustomization' => $idCustomization,
                'isCartProvided' => $cart !== null, // true if $cart is passed to reduce the quantity by the amount in cart
            ],
            null,
            false,
            true,
            false,
            null,
            true
        );
```

