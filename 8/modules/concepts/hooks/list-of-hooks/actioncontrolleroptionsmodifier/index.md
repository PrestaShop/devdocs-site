---
title: "action\u003cController\u003eOptionsModifier"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actioncontrolleroptionsmodifier/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/action\u003cController\u003eOptionsModifier.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('action' . $this->controller_name . 'OptionsModifier', [
            'options' => &$this->fields_options,
            'option_vars' => &$this->tpl_option_vars,
        ])
```

