---
title: "actionGetProductPropertiesAfterUnitPrice"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actiongetproductpropertiesafterunitprice/"
version: "9"
description: "This hook is called after defining the properties of a product"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionGetProductPropertiesAfterUnitPrice.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionGetProductPropertiesAfterUnitPrice', [ 'id_lang' => $id_lang, 'product' => &$row, 'context' => $context, ])
```

