---
title: "actionGetProductPropertiesBefore"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actiongetproductpropertiesbefore/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionGetProductPropertiesBefore.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionGetProductPropertiesBefore', [ 'id_lang' => $id_lang, 'product' => &$row, 'context' => $context, ])
```

