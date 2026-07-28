---
title: "actionAdminProductsListingResultsModifier"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionadminproductslistingresultsmodifier/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionAdminProductsListingResultsModifier.md"
---


{{% hookDescriptor %}}

## Parameters details

```php
    <?php
    array(
      '_ps_version' => (string) PrestaShop version,
      'products' => &(PDOStatement),
      'total' => (int),
    );
```

## Call of the Hook in the origin file

```php
Hook::exec('action' . $this->controller_name . 'ListingResultsModifier', [ 'list' => &$this->_list, 'list_total' => &$this->_listTotal, ])
```

