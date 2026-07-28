---
title: "actionGetExtraMailTemplateVars"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actiongetextramailtemplatevars/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionGetExtraMailTemplateVars.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec(
                'actionGetExtraMailTemplateVars',
                [
                    'template' => $template,
                    'template_vars' => $templateVars,
                    'extra_template_vars' => &$extraTemplateVars,
                    'id_lang' => (int) $idLang,
                ],
                null,
                true
            )
```

