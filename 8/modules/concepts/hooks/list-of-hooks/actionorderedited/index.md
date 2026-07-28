---
title: "actionOrderEdited"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionorderedited/"
version: "8"
description: "This hook is called when an order is edited"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionOrderEdited.md"
---


{{% hookDescriptor %}}

## Parameters details

```php
      <?php
        array( 'order' => (object) Order
      );
```

## Call of the Hook in the origin file

```php
Hook::exec('actionOrderEdited', ['order' => $order])
```

