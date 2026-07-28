---
title: "displayAdminOrderMain"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/displayadminordermain/"
version: "8"
description: "This hook displays content in the order view page in the main column under the details view"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/displayAdminOrderMain.md"
---


{{% hookDescriptor %}}

## Parameters details

```php
    <?php
    array(
      'id_order' => (int) Order ID
    );
```

## Call of the Hook in the origin file

```php
{{ renderhook('displayAdminOrderMain', {'id_order': orderForViewing.id}) }}
```

## Example implementation

This hook has been implemented as an example in our [modules examples repository - demovieworderhooks](https://github.com/PrestaShop/example-modules/tree/8.x/demovieworderhooks).

