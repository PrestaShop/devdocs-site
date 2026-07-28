---
title: "actionProductSearchProviderRunQueryAfter"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionproductsearchproviderrunqueryafter/"
version: "9"
description: "Required to return a previous state of an SQL query or/and to change a result of the SQL query after executing it"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionProductSearchProviderRunQueryAfter.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionProductSearchProviderRunQueryAfter', [ 'query' => $query, 'result' => $result, ])
```

