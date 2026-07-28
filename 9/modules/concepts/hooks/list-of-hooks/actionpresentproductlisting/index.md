---
title: "actionPresentProductListing"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionpresentproductlisting/"
version: "9"
description: "This hook is called before a product listing is presented"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionPresentProductListing.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionPresentProductListing', ['presentedProduct' => &$cartProductLazyArray] )
```

