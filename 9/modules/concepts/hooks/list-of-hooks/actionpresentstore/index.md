---
title: "actionPresentStore"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionpresentstore/"
version: "9"
description: "This hook is called before a store is presented"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionPresentStore.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionPresentStore', ['presentedStore' => &$storeLazyArray] )
```

