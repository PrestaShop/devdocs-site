---
title: "actionFeatureDelete"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionfeaturedelete/"
version: "8"
description: "This hook is called while deleting an attributes features"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionFeatureDelete.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionFeatureDelete', ['id_feature' => $this->id])
```

