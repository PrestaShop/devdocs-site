---
title: "actionAfterLoadRoutes"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionafterloadroutes/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionAfterLoadRoutes.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

This hook was added in {{< minver v="8.1.2" >}}.

```php
Hook::exec('actionAfterLoadRoutes', ['dispatcher' => $this, 'id_shop' => $id_shop]);
```

Parameter `$id_shop` has been added in version {{< minver v="8.1.5" >}}.
