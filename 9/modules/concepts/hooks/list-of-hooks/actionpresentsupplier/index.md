---
title: "actionPresentSupplier"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionpresentsupplier/"
version: "9"
description: "This hook is called before a supplier is presented"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionPresentSupplier.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionPresentSupplier', ['presentedSupplier' => &$supplierLazyArray] )
```

