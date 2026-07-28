---
title: "actionPresentCart"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionpresentcart/"
version: "9"
description: "This hook is called before a cart is presented"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionPresentCart.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionPresentCart', ['presentedCart' => &$cartLazyArray] )
```

