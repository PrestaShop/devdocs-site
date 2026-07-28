---
title: "displayOrderDetail"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/displayorderdetail/"
version: "9"
description: "This hook is displayed within the order's details in Front Office"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/displayOrderDetail.md"
---


{{% hookDescriptor %}}

## Parameters details

```php
    <?php
    array(
      'order' => (object) Order object
    );
```

## Call of the Hook in the origin file

```php
Hook::exec('displayOrderDetail', ['order' => $this->order])
```

