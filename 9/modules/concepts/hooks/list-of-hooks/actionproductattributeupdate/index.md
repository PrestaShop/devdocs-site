---
title: "actionProductAttributeUpdate"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionproductattributeupdate/"
version: "9"
description: "This hook is displayed when a product's attribute is updated"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionProductAttributeUpdate.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionProductAttributeUpdate', ['id_product_attribute' => (int) $id_product_attribute])
```

