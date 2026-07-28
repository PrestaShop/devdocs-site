---
title: "actionProductSave"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionproductsave/"
version: "9"
description: "This hook is called while saving products"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionProductSave.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionProductSave', ['id_product' => (int) $this->id, 'product' => $this])
```

