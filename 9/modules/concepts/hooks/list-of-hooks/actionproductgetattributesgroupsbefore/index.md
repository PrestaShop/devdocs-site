---
title: "actionProductGetAttributesGroupsBefore"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionproductgetattributesgroupsbefore/"
version: "9"
description: "Allows to modify product attributes groups SQL query before they are retrieved from the database."
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionProductGetAttributesGroupsBefore.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionProductGetAttributesGroupsBefore', [
            'product' => $this,
            'id_lang' => $id_lang,
            'id_product_attribute' => $id_product_attribute,
            'query' => $query,
        ]);
```

