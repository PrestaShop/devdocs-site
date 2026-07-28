---
title: "actionCheckAttributeQuantity"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actioncheckattributequantity/"
version: "9"
description: "Allows modules to validate or override the stock availability check for a specific product combination."
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionCheckAttributeQuantity.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec(
            'actionCheckAttributeQuantity',
            [
                'id_product_attribute' => $idProductAttribute,
                'qty' => $qty,
                'shop' => $shop,
            ],
            null,
            false,
            true,
            false,
            null,
            true
        );
```

