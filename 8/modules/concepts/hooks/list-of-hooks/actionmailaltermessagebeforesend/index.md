---
title: "actionMailAlterMessageBeforeSend"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionmailaltermessagebeforesend/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionMailAlterMessageBeforeSend.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionMailAlterMessageBeforeSend', [
                'message' => &$message,
            ])
```

