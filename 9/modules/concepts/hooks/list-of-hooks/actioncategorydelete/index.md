---
title: "actionCategoryDelete"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actioncategorydelete/"
version: "9"
description: "This hook is displayed when a category is deleted"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionCategoryDelete.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionCategoryDelete', ['category' => $this, 'deleted_children' => $deletedChildren])
```

