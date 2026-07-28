---
title: "actionProductAdd"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionproductadd/"
version: "8"
description: "This hook is displayed after a product is created"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionProductAdd.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
dispatchWithParameters(
            'actionProductAdd',
            ['id_product_old' => $oldProductId, 'id_product' => $newProductId, 'product' => $newProduct]
        )
```

