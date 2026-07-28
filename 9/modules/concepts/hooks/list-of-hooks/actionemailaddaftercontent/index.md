---
title: "actionEmailAddAfterContent"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionemailaddaftercontent/"
version: "9"
description: "This hook is called just after fetching mail template"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionEmailAddAfterContent.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec(
    'actionEmailAddAfterContent',
    [
        'template' => $template,
        'template_html' => &$templateHtml,
        'template_txt' => &$templateTxt,
        'id_lang' => (int) $idLang,
    ],
    null,
    true
);
```

