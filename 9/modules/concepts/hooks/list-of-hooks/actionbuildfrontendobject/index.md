---
title: "actionBuildFrontEndObject"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionbuildfrontendobject/"
version: "9"
description: "This hook allows you to customize the \"prestashop\" javascript object that is included in all front office pages"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionBuildFrontEndObject.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionBuildFrontEndObject', [ 'obj' => &$object, ])
```

