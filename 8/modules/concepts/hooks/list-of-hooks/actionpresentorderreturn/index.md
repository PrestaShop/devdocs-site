---
title: "actionPresentOrderReturn"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionpresentorderreturn/"
version: "8"
description: "This hook is called before an order return is presented"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionPresentOrderReturn.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionPresentOrderReturn',
            ['presentedOrderReturn' => &$orderReturnLazyArray]
        )
```

