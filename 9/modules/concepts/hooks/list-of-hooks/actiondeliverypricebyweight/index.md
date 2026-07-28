---
title: "actionDeliveryPriceByWeight"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actiondeliverypricebyweight/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionDeliveryPriceByWeight.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
$price_by_weight = Hook::exec('actionDeliveryPriceByWeight', ['id_carrier' => $id_carrier, 'total_weight' => $total_weight, 'id_zone' => $id_zone])
```

