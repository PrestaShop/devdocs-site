---
title: "actionOrderHasBeenShipped"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionorderhasbeenshipped/"
version: "9"
description: "Allows modules to override or react to the hasBeenShipped() method of the Order class."
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionOrderHasBeenShipped.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec(
            'actionOrderHasBeenShipped',
            ['order' => $this],
            null,
            false,
            true,
            false,
            null,
            true
        );
```

