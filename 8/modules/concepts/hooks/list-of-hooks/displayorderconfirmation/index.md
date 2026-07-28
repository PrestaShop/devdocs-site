---
title: "displayOrderConfirmation"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/displayorderconfirmation/"
version: "8"
description: "This hook is called within an order's confirmation page"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/displayOrderConfirmation.md"
---


{{% hookDescriptor %}}

## Parameters details

```php
    <?php
    array(
      'order' => (object) Order
    );
```

## Call of the Hook in the origin file

```php
Hook::exec('displayOrderConfirmation', ['order' => $order])
```

