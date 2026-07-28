---
title: "actionAdminBreadcrumbModifier"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionadminbreadcrumbmodifier/"
version: "9"
description: "This hook allows modifying back office breadcrumb"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionAdminBreadcrumbModifier.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionAdminBreadcrumbModifier', ['tabs' => $tabs, 'breadcrumb' => &$breadcrumbs2], null, true)
```

