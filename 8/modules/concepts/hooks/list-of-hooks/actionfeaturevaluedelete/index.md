---
title: "actionFeatureValueDelete"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionfeaturevaluedelete/"
version: "8"
description: "This hook is called while deleting an attributes features value"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionFeatureValueDelete.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionFeatureValueDelete', ['id_feature_value' => $this->id])
```

