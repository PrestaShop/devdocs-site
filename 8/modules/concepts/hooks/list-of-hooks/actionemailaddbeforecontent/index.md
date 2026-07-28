---
title: "actionEmailAddBeforeContent"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionemailaddbeforecontent/"
version: "8"
description: "This hook is called just before fetching mail template"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionEmailAddBeforeContent.md"
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
            )
```

