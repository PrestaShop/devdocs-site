---
title: "actionLoggerLogMessage"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionloggerlogmessage/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionLoggerLogMessage.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec(
    'actionLoggerLogMessage',
    [
        'message' => $message,
        'level' => $level,
        'isLogged' => $level >= $this->level,
    ]
);
```


