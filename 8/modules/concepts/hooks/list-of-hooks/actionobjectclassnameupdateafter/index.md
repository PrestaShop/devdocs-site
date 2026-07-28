---
title: "actionObject\u003cClassName\u003eUpdateAfter"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionobjectclassnameupdateafter/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionObject\u003cClassName\u003eUpdateAfter.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionObject' . $this->getFullyQualifiedName() . 'UpdateAfter', ['object' => $this]);
```

