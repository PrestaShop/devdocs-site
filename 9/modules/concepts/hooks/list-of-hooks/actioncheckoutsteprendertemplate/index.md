---
title: "actionCheckoutStepRenderTemplate"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actioncheckoutsteprendertemplate/"
version: "9"
description: "This hook is called when rendering every checkout step template"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionCheckoutStepRenderTemplate.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionCheckoutStepRenderTemplate', [
            'template' => &$template,
            'params' => &$params,
            'extraParams' => &$extraParams,
            'defaultParams' => &$defaultParams,
        ]);
```

