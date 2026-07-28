---
title: "actionTaxManager"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actiontaxmanager/"
version: "9"
description: "This hook is launched by the Tax Manager Factory"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionTaxManager.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
$tax_manager = $module_instance->hookTaxManager([
    'address' => $address,
    'params' => $type,
]);
```

