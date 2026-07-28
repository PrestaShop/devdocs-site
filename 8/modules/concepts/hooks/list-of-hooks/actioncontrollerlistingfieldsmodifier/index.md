---
title: "action\u003cController\u003eListingFieldsModifier"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actioncontrollerlistingfieldsmodifier/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/action\u003cController\u003eListingFieldsModifier.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('action' . $this->controller_name . 'ListingFieldsModifier', [
            'fields' => &$this->fields_list,
        ])
```

