---
title: "actionOverrideShippingFreePrice"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionoverrideshippingfreeprice/"
version: "9"
description: "Allows modules to override the free shipping price and return their custom value, for example to specify it by zone or other criteria."
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionOverrideShippingFreePrice.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionOverrideShippingFreePrice', ['shippingFreePrice' => &$shippingFreePrice, 'id_zone' => $id_zone, 'id_currency' => $this->id_currency])
```

