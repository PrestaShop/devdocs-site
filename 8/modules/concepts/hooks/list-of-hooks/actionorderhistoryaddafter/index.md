---
title: "actionOrderHistoryAddAfter"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionorderhistoryaddafter/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionOrderHistoryAddAfter.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionOrderHistoryAddAfter', ['order_history' => $this], null, false, true, false, $order->id_shop)
```

