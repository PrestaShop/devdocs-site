---
title: "actionProductUpdate"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionproductupdate/"
version: "8"
description: "This hook is displayed after a product has been updated"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionProductUpdate.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionProductUpdate', ['id_product' => (int) $product->id, 'product' => $product])
```

