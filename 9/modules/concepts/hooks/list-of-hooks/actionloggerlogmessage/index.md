---
title: "actionLoggerLogMessage"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionloggerlogmessage/"
version: "9"
description: "This hook allows to make an extra action while an exception is thrown and the logger logs it"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionLoggerLogMessage.md"
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

