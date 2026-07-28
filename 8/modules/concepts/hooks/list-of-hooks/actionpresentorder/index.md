---
title: "actionPresentOrder"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionpresentorder/"
version: "8"
description: "This hook is called before an order is presented"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionPresentOrder.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionPresentOrder',
            ['presentedOrder' => &$orderLazyArray]
        )
```

