---
title: "actionOutputHTMLBefore"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionoutputhtmlbefore/"
version: "8"
description: "This hook is used to filter the whole HTML page before it is rendered (only front)"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionOutputHTMLBefore.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionOutputHTMLBefore', ['html' => &$html])
```

