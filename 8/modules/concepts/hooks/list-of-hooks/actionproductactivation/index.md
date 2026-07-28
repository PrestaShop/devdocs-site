---
title: "actionProductActivation"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionproductactivation/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionProductActivation.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
dispatchWithParameters('actionProductActivation', ['id_product' => (int) $product->id, 'product' => $product, 'activated' => $activate])
```

