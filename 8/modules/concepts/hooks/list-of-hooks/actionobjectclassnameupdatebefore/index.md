---
title: "actionObject\u003cClassName\u003eUpdateBefore"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionobjectclassnameupdatebefore/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionObject\u003cClassName\u003eUpdateBefore.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionObject' . $this->getFullyQualifiedName() . 'UpdateBefore', ['object' => $this]);
```

