---
title: "actionCheckoutRender"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actioncheckoutrender/"
version: "8"
description: "This hook is called when constructing the checkout process"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionCheckoutRender.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionCheckoutRender', ['checkoutProcess' => &$this->checkoutProcess])
```

