---
title: "actionProductAttributeDelete"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionproductattributedelete/"
version: "8"
description: "This hook is displayed when a product's attribute is deleted"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionProductAttributeDelete.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionProductAttributeDelete', ['id_product_attribute' => 0, 'id_product' => (int) $this->id, 'deleteAllAttributes' => true])
```

