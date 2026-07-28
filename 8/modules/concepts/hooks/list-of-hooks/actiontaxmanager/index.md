---
title: "actionTaxManager"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actiontaxmanager/"
version: "8"
description: "This hook is launched by the Tax Manager Factory"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionTaxManager.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
$tax_manager = $module_instance->hookTaxManager([
    'address' => $address,
    'params' => $type,
]);
```

