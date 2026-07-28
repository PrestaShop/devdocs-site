---
title: "actionAjaxDie\u003cController\u003e\u003cMethod\u003eBefore"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionajaxdiecontrollermethodbefore/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionAjaxDie\u003cController\u003e\u003cMethod\u003eBefore.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

### Before
{{< minver v="8.1" title="true" >}}

```php
Hook::exec('actionAjaxDie' . $controller . $method . 'Before', ['value' => $value])
```

### From
{{< minver v="8.1" title="true" >}}

```php
Hook::exec('actionAjaxDie' . $controller . $method . 'Before', ['value' => &$value])
```

{{% notice note %}}
Note that the `value` is now passed by reference
{{% /notice %}}

