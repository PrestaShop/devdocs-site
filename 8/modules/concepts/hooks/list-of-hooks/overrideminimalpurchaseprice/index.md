---
title: "overrideMinimalPurchasePrice"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/overrideminimalpurchaseprice/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/overrideMinimalPurchasePrice.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('overrideMinimalPurchasePrice', [
            'minimalPurchase' => &$minimalPurchase,
        ])
```

