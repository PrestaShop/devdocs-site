---
title: "actionGetExtraMailTemplateVars"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actiongetextramailtemplatevars/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionGetExtraMailTemplateVars.md"
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
);
```

