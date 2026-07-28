---
title: "actionOverrideQuantityAvailableByProduct"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionoverridequantityavailablebyproduct/"
version: "9"
description: "Allows modules to override the available quantity returned by StockAvailable::getQuantityAvailableByProduct()."
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionOverrideQuantityAvailableByProduct.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec(
            'actionOverrideQuantityAvailableByProduct',
            [
                'id_product' => $id_product,
                'id_product_attribute' => $id_product_attribute,
                'id_shop' => $id_shop,
            ],
            null,
            false,
            true,
            false,
            null,
            true
        );
```

