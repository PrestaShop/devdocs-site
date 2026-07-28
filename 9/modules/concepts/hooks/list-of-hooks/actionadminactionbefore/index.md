---
title: "actionAdmin\u003cAction\u003eBefore"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionadminactionbefore/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionAdmin\u003cAction\u003eBefore.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionAdmin' . ucfirst($this->action) . 'Before', ['controller' => $this]);
```

