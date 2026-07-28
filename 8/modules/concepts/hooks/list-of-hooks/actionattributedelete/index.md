---
title: "actionAttributeDelete"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionattributedelete/"
version: "8"
description: "This hook is called while deleting an attributes features value"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionAttributeDelete.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionAttributeDelete', ['id_attribute' => $this->id])
```

