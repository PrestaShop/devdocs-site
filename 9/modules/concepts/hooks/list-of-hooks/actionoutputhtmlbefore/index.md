---
title: "actionOutputHTMLBefore"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionoutputhtmlbefore/"
version: "9"
description: "This hook is used to filter the whole HTML page before it is rendered (only front)"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionOutputHTMLBefore.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionOutputHTMLBefore', ['html' => &$html])
```

