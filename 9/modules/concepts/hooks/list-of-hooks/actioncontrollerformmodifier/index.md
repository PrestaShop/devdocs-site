---
title: "action\u003cController\u003eFormModifier"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actioncontrollerformmodifier/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/action\u003cController\u003eFormModifier.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('action' . $this->controller_name . 'FormModifier', [
                'object' => &$this->object,
                'fields' => &$this->fields_form,
                'fields_value' => &$fields_value,
                'form_vars' => &$this->tpl_form_vars,
            ])
```

