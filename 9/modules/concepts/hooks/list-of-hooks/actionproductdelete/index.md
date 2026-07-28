---
title: "actionProductDelete"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionproductdelete/"
version: "9"
description: "This hook is called when a product is deleted"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionProductDelete.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionProductDelete', ['id_product' => (int) $this->id, 'product' => $this])
```

