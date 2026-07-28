---
title: "actionOrderHistoryAddAfter"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionorderhistoryaddafter/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionOrderHistoryAddAfter.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionOrderHistoryAddAfter', ['order_history' => $this], null, false, true, false, $order->id_shop)
```

