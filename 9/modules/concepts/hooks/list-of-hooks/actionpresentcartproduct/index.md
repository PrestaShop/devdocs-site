---
title: "actionPresentCartProduct"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionpresentcartproduct/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionPresentCartProduct.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionPresentCartProduct',
            ['presentedProduct' => &$cartProductLazyArray]
        );
```

