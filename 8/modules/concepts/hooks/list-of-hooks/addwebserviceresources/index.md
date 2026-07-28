---
title: "addWebserviceResources"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/addwebserviceresources/"
version: "8"
description: "This hook is called when webservice resources list in webservice controller"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/addWebserviceResources.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('addWebserviceResources', ['resources' => $resources], null, true, false)
```

