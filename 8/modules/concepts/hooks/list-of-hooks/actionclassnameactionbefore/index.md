---
title: "action\u003cClassName\u003e\u003cAction\u003eBefore"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionclassnameactionbefore/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/action\u003cClassName\u003e\u003cAction\u003eBefore.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('action' . get_class($this) . ucfirst($this->action) . 'Before', ['controller' => $this]);
```

