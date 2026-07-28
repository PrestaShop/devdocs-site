---
title: "actionLanguageLinkParameters"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionlanguagelinkparameters/"
version: "9"
description: "Allows modules to provide proper parameters for links in other languages."
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionLanguageLinkParameters.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec(
    'actionLanguageLinkParameters',
    ['linkParams' => &$params, 'linkIdLang' => (int) $idLang]
);
```

