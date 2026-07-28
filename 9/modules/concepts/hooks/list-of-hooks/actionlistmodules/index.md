---
title: "actionListModules"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionlistmodules/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionListModules.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
$modulesFromHook = $this->hookManager->exec('actionListModules', [], null, true);
$modulesFromHook = array_values($modulesFromHook ?? []);
```

## Example implementation

This hook has been implemented in the native [ps_distributionapiclient](https://github.com/PrestaShop/ps_distributionapiclient/tree/master) module

