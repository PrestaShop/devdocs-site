---
title: "actionModuleUnRegisterHookAfter"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionmoduleunregisterhookafter/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionModuleUnRegisterHookAfter.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec(
            'actionModuleUnRegisterHookAfter',
            [
                'object' => $module_instance,
                'hook_name' => $hook_name,
            ]
        )
```

