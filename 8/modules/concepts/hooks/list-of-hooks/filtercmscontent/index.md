---
title: "filterCmsContent"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/filtercmscontent/"
version: "8"
description: "This hook is called just before fetching content page"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/filterCmsContent.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec(
                'filterCmsContent',
                ['object' => $cmsVar],
                $id_module = null,
                $array_return = false,
                $check_exceptions = true,
                $use_push = false,
                $id_shop = null,
                $chain = true
            )
```

