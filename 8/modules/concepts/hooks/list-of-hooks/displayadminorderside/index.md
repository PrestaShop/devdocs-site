---
title: "displayAdminOrderSide"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/displayadminorderside/"
version: "8"
description: "This hook displays content in the order view page in the side column under the customer view"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/displayAdminOrderSide.md"
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
{{ renderhook('displayAdminOrderSide', {'id_order': orderForViewing.id}) }}
```

