---
title: "overrideLayoutTemplate"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/overridelayouttemplate/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/overrideLayoutTemplate.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec(
            'overrideLayoutTemplate',
            [
                'default_layout' => $layout,
                'entity' => $entity,
                'locale' => $this->context->language->locale,
                'controller' => $this,
                'content_only' => $content_only,
            ]
        )
```

