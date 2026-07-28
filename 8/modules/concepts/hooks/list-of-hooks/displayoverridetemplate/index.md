---
title: "displayOverrideTemplate"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/displayoverridetemplate/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/displayOverrideTemplate.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

### Before {{< minver v="8.1">}}

```php
Hook::exec(
  'displayOverrideTemplate',
  [
    'controller' => $this,
    'template_file' => $template,
    'id' => $params['id'],
    'locale' => $locale,
  ]
)
```

### From {{< minver v="8.1">}}

```php
Hook::exec(
  'displayOverrideTemplate',
  [
    'controller' => $this,
    'template_file' => $template,
    'entity' => $params['entity'],
    'id' => $params['id'],
    'locale' => $locale,
  ]
)
```

