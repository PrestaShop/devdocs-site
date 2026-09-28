---
title: "displayOrderDetailProductLine"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/displayorderdetailproductline/"
version: "9"
description: "This hook is displayed on each product line of the order's details in Front Office"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/displayOrderDetailProductLine.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
{hook h='displayOrderDetailProductLine' id_order=$product.id_order id_order_detail=$product.id_order_detail id_product=$product.id_product};
```

