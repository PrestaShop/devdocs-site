---
title: "actionAdminControllerSetMedia"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionadmincontrollersetmedia/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionAdminControllerSetMedia.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionAdminControllerSetMedia')
```

## Example implementation
This hook has been implemented as an example in our 
[modules examples repository - demoextendgrid](https://github.com/PrestaShop/example-modules/tree/master/demoextendgrid).

{{% callout type="warning" %}}
In PrestaShop 9, this hook is dispatched from a Twig component. 
The methods `addJqueryPlugin()` and `addJqueryUI()` may not be available 
on migrated Symfony pages. Use `addJS()` and `addCSS()` instead.
{{% /callout %}}
