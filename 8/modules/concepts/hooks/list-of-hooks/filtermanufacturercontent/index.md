---
title: "filterManufacturerContent"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/filtermanufacturercontent/"
version: "8"
description: "This hook is called just before fetching content page manufacturer"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/filterManufacturerContent.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec(
            'filterManufacturerContent',
            ['filtered_content' => $manufacturerVar['description']],
            $id_module = null,
            $array_return = false,
            $check_exceptions = true,
            $use_push = false,
            $id_shop = null,
            $chain = true
        )
```

