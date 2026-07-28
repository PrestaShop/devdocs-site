---
title: "action\u003cLegacyControllerName\u003eListingResultsModifier"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionlegacycontrollernamelistingresultsmodifier/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/action\u003cLegacyControllerName\u003eListingResultsModifier.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
dispatchWithParameters('action' . $helperListConfiguration->legacyControllerName . 'ListingResultsModifier', [
            'list' => &$helperListConfiguration->list,
            'list_total' => &$helperListConfiguration->listTotal,
        ])
```

