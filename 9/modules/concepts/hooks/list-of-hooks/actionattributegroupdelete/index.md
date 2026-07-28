---
title: "actionAttributeGroupDelete"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionattributegroupdelete/"
version: "9"
description: "This hook is called while deleting an attributes  group"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionAttributeGroupDelete.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionAttributeGroupDelete', ['id_attribute_group' => $this->id])
```

