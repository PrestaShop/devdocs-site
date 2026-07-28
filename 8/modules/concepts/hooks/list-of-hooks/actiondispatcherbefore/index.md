---
title: "actionDispatcherBefore"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actiondispatcherbefore/"
version: "8"
description: "This hook is called at the beginning of the dispatch method of the Dispatcher"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionDispatcherBefore.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
dispatchWithParameters(self::DISPATCHER_BEFORE_ACTION, [
            'controller_type' => $controllerType,
        ])
```

