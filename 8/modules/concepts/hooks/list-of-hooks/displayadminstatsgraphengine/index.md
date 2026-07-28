---
title: "displayAdminStatsGraphEngine"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/displayadminstatsgraphengine/"
version: "8"
description: "Permits creating graph engines for the back office, you can refer to our [`GraphNvD3` implementation](https://github.com/PrestaShop/graphnvd3)."
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/displayAdminStatsGraphEngine.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
return call_user_func([$render, 'hookGraphEngine'], $params, $drawer);
```

