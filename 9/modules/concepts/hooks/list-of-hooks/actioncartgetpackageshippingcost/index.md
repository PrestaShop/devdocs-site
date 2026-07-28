---
title: "actionCartGetPackageShippingCost"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actioncartgetpackageshippingcost/"
version: "9"
description: "This hook is called in order to allow to modify package shipping cost"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionCartGetPackageShippingCost.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec(
    'actionCartGetPackageShippingCost',
    [
        'cart' => $this,
        'id_carrier' => $id_carrier,
        'use_tax' => $use_tax,
        'default_country' => $default_country,
        'product_list' => $product_list,
        'id_zone' => $id_zone,
        'keepOrderPrices' => $keepOrderPrices,
        'shippingCost' => &$shippingCost,
    ]
);
```

