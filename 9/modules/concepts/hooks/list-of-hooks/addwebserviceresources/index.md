---
title: "addWebserviceResources"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/addwebserviceresources/"
version: "9"
description: "This hook is called when webservice resources list in webservice controller"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/addWebserviceResources.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
$extra_resources = Hook::exec('addWebserviceResources', ['resources' => $resources], null, true, false)
```

