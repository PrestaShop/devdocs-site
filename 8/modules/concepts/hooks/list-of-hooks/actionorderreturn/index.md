---
title: "actionOrderReturn"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionorderreturn/"
version: "8"
description: "This hook is displayed when a customer returns a product "
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionOrderReturn.md"
---


{{% hookDescriptor %}}

## Parameters details

```php
    <?php
    array(
      'orderReturn' => (object) OrderReturn
    );
```

## Call of the Hook in the origin file

```php
Hook::exec('actionOrderReturn', ['orderReturn' => $orderReturn])
```

