---
title: "actionGenerateDocumentReference"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actiongeneratedocumentreference/"
version: "9"
description: "This hook allows modules to return custom document references"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionGenerateDocumentReference.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
$reference = Hook::exec('actionGenerateDocumentReference', [ 'type' => 'order', ])
```

