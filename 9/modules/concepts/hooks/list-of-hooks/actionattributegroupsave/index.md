---
title: "actionAttributeGroupSave"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionattributegroupsave/"
version: "9"
description: "This hook is called while saving an attributes group"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionAttributeGroupSave.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionAttributeGroupSave', ['id_attribute_group' => $this->id])
```

