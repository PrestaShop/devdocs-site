---
title: "actionModuleUpgradeAfter"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionmoduleupgradeafter/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionModuleUpgradeAfter.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionModuleUpgradeAfter', ['module_name' => $name, 'old_version' => static::$modules_cache[$name]['upgrade']['upgraded_from'], 'new_version' => $version]);
```

