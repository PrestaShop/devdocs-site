---
title: "actionModifyHtmlPurifierConfig"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionmodifyhtmlpurifierconfig/"
version: "9"
description: "Allows modules to modify the HTMLPurifier definition by adding custom allowed HTML elements or attributes during Tools::purifyHTML()."
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionModifyHtmlPurifierConfig.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionModifyHtmlPurifierConfig', [
                        'config' => &$config,
                    ]);
```

