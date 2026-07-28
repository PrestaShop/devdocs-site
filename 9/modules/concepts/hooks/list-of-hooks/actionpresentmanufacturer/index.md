---
title: "actionPresentManufacturer"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionpresentmanufacturer/"
version: "9"
description: "This hook is called before a manufacturer is presented"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionPresentManufacturer.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionPresentManufacturer', ['presentedManufacturer' => &$manufacturerLazyArray] )
```

