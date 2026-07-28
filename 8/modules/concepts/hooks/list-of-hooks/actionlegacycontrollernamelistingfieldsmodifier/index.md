---
title: "action\u003cLegacyControllerName\u003eListingFieldsModifier"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionlegacycontrollernamelistingfieldsmodifier/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/action\u003cLegacyControllerName\u003eListingFieldsModifier.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
dispatchWithParameters('action' . $helperListConfiguration->legacyControllerName . 'ListingFieldsModifier', [
            'select' => &$helperListConfiguration->select,
            'join' => &$helperListConfiguration->join,
            'where' => &$helperListConfiguration->where,
            'group_by' => &$helperListConfiguration->group,
            'order_by' => &$helperListConfiguration->orderBy,
            'order_way' => &$helperListConfiguration->orderWay,
            'fields' => &$helperListConfiguration->fieldsList,
        ])
```

