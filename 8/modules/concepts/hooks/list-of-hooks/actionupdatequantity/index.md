---
title: "actionUpdateQuantity"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionupdatequantity/"
version: "8"
description: "Quantity is updated only when a customer effectively places their order"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionUpdateQuantity.md"
---


{{% hookDescriptor %}}

## Parameters details

```php
    <?php
    array(
      'id_product' => (int) Product ID,
      'id_product_attribute' => (int) Product attribute ID,
      'quantity' => (int) New product quantity
    );
```

## Call of the Hook in the origin file

```php
Hook::exec(
                        'actionUpdateQuantity',
                                    [
                                        'id_product' => $id_product,
                                        'id_product_attribute' => 0,
                                        'quantity' => $product_quantity,
                                        'id_shop' => $id_shop,
                                    ]
                    )
```

