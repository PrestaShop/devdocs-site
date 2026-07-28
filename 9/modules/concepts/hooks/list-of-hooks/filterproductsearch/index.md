---
title: "filterProductSearch"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/filterproductsearch/"
version: "9"
description: "This hook is called in order to allow to modify search product result"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/filterProductSearch.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('filterProductSearch', ['searchVariables' => &$searchVariables])
```

