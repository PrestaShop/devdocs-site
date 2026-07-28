---
title: "actionPresentProductListing"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionpresentproductlisting/"
version: "8"
description: "This hook is called before a product listing is presented"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionPresentProductListing.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionPresentProductListing',
            ['presentedProduct' => &$productListingLazyArray]
        )
```

