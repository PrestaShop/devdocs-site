---
title: "actionMailAlterMessageBeforeSend"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionmailaltermessagebeforesend/"
version: "9"
description: "This hook is called before the Swift Message is sent in Mail.php"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionMailAlterMessageBeforeSend.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionMailAlterMessageBeforeSend', [ 'message' => &$email, ])
```

