---
title: "actionProductSearchProviderRunQueryBefore"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionproductsearchproviderrunquerybefore/"
version: "9"
description: "Required to modify an SQL query before executing it"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionProductSearchProviderRunQueryBefore.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionProductSearchProviderRunQueryBefore', [ 'query' => $query, ])
```

