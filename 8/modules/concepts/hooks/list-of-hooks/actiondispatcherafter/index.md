---
title: "actionDispatcherAfter"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actiondispatcherafter/"
version: "8"
description: "This hook is called at the end of the dispatch method of the Dispatcher"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionDispatcherAfter.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
dispatchWithParameters(self::DISPATCHER_AFTER_ACTION, [
                'controller_type' => $requestAttributes->get('controller_type'),
                'controller_class' => $requestAttributes->get('controller_name'),
                'is_module' => 0,
            ])
```

