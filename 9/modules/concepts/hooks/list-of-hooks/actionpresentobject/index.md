---
title: "actionPresentObject"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionpresentobject/"
version: "9"
description: "This hook is called before an object is presented"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionPresentObject.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionPresentObject', ['presentedObject' => &$presentedObject, 'table' => $object::$definition['table']])
```

