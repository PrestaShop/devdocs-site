---
title: "action\u003cLegacyControllerName\u003eListingResultsModifier"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionlegacycontrollernamelistingresultsmodifier/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/action\u003cLegacyControllerName\u003eListingResultsModifier.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('action' . $this->controller_name . 'ListingResultsModifier', [
            'list' => &$this->_list,
            'list_total' => &$this->_listTotal,
        ])
```

