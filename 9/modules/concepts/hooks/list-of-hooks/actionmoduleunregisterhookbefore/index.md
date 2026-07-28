---
title: "actionModuleUnRegisterHookBefore"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionmoduleunregisterhookbefore/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionModuleUnRegisterHookBefore.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionModuleUnRegisterHookBefore', [ 'object' => $module_instance, 'hook_name' => $hook_name, ])
```

