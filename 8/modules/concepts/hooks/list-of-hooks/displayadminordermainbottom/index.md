---
title: "displayAdminOrderMainBottom"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/displayadminordermainbottom/"
version: "8"
description: "This hook displays content in the order view page at the bottom of the main column"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/displayAdminOrderMainBottom.md"
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
{{ renderhook('displayAdminOrderMainBottom', {'id_order': orderForViewing.id}) }}
```

