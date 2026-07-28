---
title: "actionAdminProductsListingResultsModifier"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionadminproductslistingresultsmodifier/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionAdminProductsListingResultsModifier.md"
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
Hook::exec('actionAdminProductsListingResultsModifier', [
            '_ps_version' => AppKernel::VERSION,
            'products' => &$products,
            'total' => $total,
        ])
```

