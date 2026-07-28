---
title: "actionUpdateLangAfter"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionupdatelangafter/"
version: "9"
description: "Update \"lang\" tables after adding or updating a language"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionUpdateLangAfter.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionUpdateLangAfter', ['lang' => $language])
```

