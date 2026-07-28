---
title: "sendMailAlterTemplateVars"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/sendmailaltertemplatevars/"
version: "9"
description: "This hook is called when Mail::send() is called"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/sendMailAlterTemplateVars.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec(
    'sendMailAlterTemplateVars',
    [
        'template' => $template,
        'template_vars' => &$templateVars,
    ]
);
```

