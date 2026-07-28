---
title: "actionDuplicateCartData"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionduplicatecartdata/"
version: "9"
description: "This hook is triggered after all the cart related data has been duplicated"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionDuplicateCartData.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionDuplicateCartData', ['oldCardId' => $this->id, 'newCartId' => $cart->id]);
```

