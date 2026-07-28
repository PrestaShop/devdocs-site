---
title: "actionModuleUnRegisterHookAfter"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionmoduleunregisterhookafter/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionModuleUnRegisterHookAfter.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionModuleUnRegisterHookAfter', [ 'object' => $module_instance, 'hook_name' => $hook_name, ])
```

