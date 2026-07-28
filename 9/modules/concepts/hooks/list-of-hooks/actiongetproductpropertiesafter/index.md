---
title: "actionGetProductPropertiesAfter"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actiongetproductpropertiesafter/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionGetProductPropertiesAfter.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionGetProductPropertiesAfter', [
    'id_lang' => $id_lang,
    'product' => &$row,
    'context' => $context,
]);
```

