---
title: "dashboardData"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/dashboarddata/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/dashboardData.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
die(json_encode(Hook::exec('dashboardData', $params, $id_module, true)));
```

