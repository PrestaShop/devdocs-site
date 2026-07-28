---
title: "actionFeatureDelete"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionfeaturedelete/"
version: "9"
description: "This hook is called while deleting an attributes features"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionFeatureDelete.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionFeatureDelete', ['id_feature' => $this->id])
```

