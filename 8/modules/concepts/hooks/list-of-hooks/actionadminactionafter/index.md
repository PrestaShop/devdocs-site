---
title: "actionAdmin\u003cAction\u003eAfter"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionadminactionafter/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionAdmin\u003cAction\u003eAfter.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionAdmin' . ucfirst($this->action) . 'After', ['controller' => $this, 'return' => $return]);
```

