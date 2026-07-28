---
title: "actionEmailSendBefore"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionemailsendbefore/"
version: "8"
description: "This hook is used to filter the content or the metadata of an email before sending it or even prevent its sending"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionEmailSendBefore.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec(
            'actionEmailSendBefore',
            [
                'idLang' => &$idLang,
                'template' => &$template,
                'subject' => &$subject,
                'templateVars' => &$templateVars,
                'to' => &$to,
                'toName' => &$toName,
                'from' => &$from,
                'fromName' => &$fromName,
                'fileAttachment' => &$fileAttachment,
                'mode_smtp' => &$mode_smtp,
                'templatePath' => &$templatePath,
                'die' => &$die,
                'idShop' => &$idShop,
                'bcc' => &$bcc,
                'replyTo' => &$replyTo,
            ],
            null,
            true
        )
```

