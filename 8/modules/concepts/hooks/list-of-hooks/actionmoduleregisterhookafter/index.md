---
title: "actionModuleRegisterHookAfter"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionmoduleregisterhookafter/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionModuleRegisterHookAfter.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec(
                'actionModuleRegisterHookAfter',
                [
                    'object' => $module_instance,
                    'hook_name' => $hook_name,
                ]
            )
```

