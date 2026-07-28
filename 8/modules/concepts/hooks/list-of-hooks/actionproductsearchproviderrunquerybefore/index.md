---
title: "actionProductSearchProviderRunQueryBefore"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionproductsearchproviderrunquerybefore/"
version: "8"
description: "Required to modify an SQL query before executing it"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionProductSearchProviderRunQueryBefore.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionProductSearchProviderRunQueryBefore', [
            'query' => $query,
        ])
```

