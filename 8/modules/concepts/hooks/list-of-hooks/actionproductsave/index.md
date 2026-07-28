---
title: "actionProductSave"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionproductsave/"
version: "8"
description: "This hook is called while saving products"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionProductSave.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionProductSave', ['id_product' => (int) $this->id, 'product' => $this])
```

