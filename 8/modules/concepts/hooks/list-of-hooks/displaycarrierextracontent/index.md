---
title: "displayCarrierExtraContent"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/displaycarrierextracontent/"
version: "8"
description: "This hook calls only the module related to the carrier, in order to add options when needed"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/displayCarrierExtraContent.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('displayCarrierExtraContent', ['carrier' => $carrier], $moduleId)
```

