---
title: "displayFeaturePostProcess"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/displayfeaturepostprocess/"
version: "8"
description: "This hook is called on post-process in admin feature"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/displayFeaturePostProcess.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec(
                'displayFeaturePostProcess',
                ['errors' => &$this->errors]
            )
```

