---
title: "actionAdminMenuTabsModifier"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionadminmenutabsmodifier/"
version: "9"
description: "This hook allows modifying back office menu tabs"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionAdminMenuTabsModifier.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionAdminMenuTabsModifier', ['tabs' => &$tabs], null, true)
```

