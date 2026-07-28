---
title: "actionProductGetAttributesGroupsAfter"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionproductgetattributesgroupsafter/"
version: "9"
description: "Allows to modify product attributes groups after they are retrieved from the database."
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionProductGetAttributesGroupsAfter.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionProductGetAttributesGroupsAfter', [
            'product' => $this,
            'id_lang' => $id_lang,
            'id_product_attribute' => $id_product_attribute,
            'attributes_groups' => &$result,
        ]);
```

