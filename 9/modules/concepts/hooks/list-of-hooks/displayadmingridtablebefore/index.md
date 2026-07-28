---
title: "displayAdminGridTableBefore"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/displayadmingridtablebefore/"
version: "9"
description: "This hook adds new blocks before Grid component table"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/displayAdminGridTableBefore.md"
---


{{% hookDescriptor %}}

## Parameters details

```php
    <?php
    array(
      'grid' = Grid $grid,
      'controller' => (string) $controller
      'legacy_controller' => (string) $legacyController
    );
```

## Call of the Hook in the origin file

```php
{{ renderhook('displayAdminGridTableBefore', {
    grid: grid,
    legacy_controller: app.request.attributes.get('_legacy_controller'),
    controller: app.request.attributes.get('_controller'),
  })
}}
```

