---
title: "actionOrderHasBeenDelivered"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionorderhasbeendelivered/"
version: "9"
description: "Allows modules to override or react to the hasBeenDelivered() method of the Order class."
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionOrderHasBeenDelivered.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec(
            'actionOrderHasBeenDelivered',
            ['order' => $this],
            null,
            false,
            true,
            false,
            null,
            true
        );
```

