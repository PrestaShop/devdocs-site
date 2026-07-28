---
title: "displayOverrideTemplate"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/displayoverridetemplate/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/displayOverrideTemplate.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

### Before
{{< minver v="8.1" title="true" >}}

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

### From
{{< minver v="8.1" title="true" >}}

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
        );
```

