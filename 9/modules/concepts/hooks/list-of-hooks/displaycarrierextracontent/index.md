---
title: "displayCarrierExtraContent"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/displaycarrierextracontent/"
version: "9"
description: "This hook calls only the module related to the carrier, in order to add options when needed"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/displayCarrierExtraContent.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
$carrier['extraContent'] = Hook::exec('displayCarrierExtraContent', ['carrier' => $carrier], $moduleId)
```

