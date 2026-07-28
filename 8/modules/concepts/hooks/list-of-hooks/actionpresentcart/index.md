---
title: "actionPresentCart"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionpresentcart/"
version: "8"
description: "This hook is called before a cart is presented"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionPresentCart.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionPresentCart',
            ['presentedCart' => &$result]
        )
```

