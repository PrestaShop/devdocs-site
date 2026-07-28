---
title: "actionCheckoutRender"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actioncheckoutrender/"
version: "9"
description: "This hook is called when constructing the checkout process"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionCheckoutRender.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionCheckoutRender', ['checkoutProcess' => &$this->checkoutProcess])
```

