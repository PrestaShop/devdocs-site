---
title: "actionDeliveryPriceByWeight"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actiondeliverypricebyweight/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionDeliveryPriceByWeight.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionDeliveryPriceByWeight', ['id_carrier' => $id_carrier, 'total_weight' => $total_weight, 'id_zone' => $id_zone])
```

