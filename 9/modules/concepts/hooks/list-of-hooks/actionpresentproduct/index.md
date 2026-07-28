---
title: "actionPresentProduct"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionpresentproduct/"
version: "9"
description: "This hook is called before a product is presented"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionPresentProduct.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionPresentProduct', ['presentedProduct' => &$productLazyArray] )
```

## Example on how to change values
```php
public function hookActionPresentProduct(array $hookParams)
{
    /* Change show price to 0 to hide the product price */
    $params['presentedProduct']->offsetSet('show_price', 0, true);
}
```

