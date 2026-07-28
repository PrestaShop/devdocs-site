---
title: "action\u003cLegacyControllerName\u003eListingFieldsModifier"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionlegacycontrollernamelistingfieldsmodifier/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/action\u003cLegacyControllerName\u003eListingFieldsModifier.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('action' . $this->controller_name . 'ListingFieldsModifier', [
            'fields' => &$this->fields_list,
        ])
```

