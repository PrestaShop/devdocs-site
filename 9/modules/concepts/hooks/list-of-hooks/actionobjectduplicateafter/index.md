---
title: "actionObjectDuplicateAfter"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionobjectduplicateafter/"
version: "9"
description: "This hook is called after duplicating an object by the core."
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionObjectDuplicateAfter.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionObjectDuplicateAfter', ['oldObject' => $this, 'newObject' => $object_duplicated]);
```

