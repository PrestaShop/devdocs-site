---
title: "actionEmailAddBeforeContent"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionemailaddbeforecontent/"
version: "9"
description: "This hook is called just before fetching mail template"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionEmailAddBeforeContent.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec(
    'actionEmailAddBeforeContent',
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

