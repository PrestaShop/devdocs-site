---
title: "displayAdminOrder"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/displayadminorder/"
version: "8"
description: "This hook launches modules when the AdminOrder tab is displayed in the Back Office"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/displayAdminOrder.md"
---


{{% hookDescriptor %}}

## Parameters details

```php
    <?php
    array(
     'id_order' = (int) Order ID
    );
```

## Call of the Hook in the origin file

```php
{{ renderhook('displayAdminOrder', {'id_order': orderForViewing.id}) }}
```

## Example implementation

This hook has been implemented as an example in our [modules examples repository - demovieworderhooks](https://github.com/PrestaShop/example-modules/tree/8.x/demovieworderhooks).

