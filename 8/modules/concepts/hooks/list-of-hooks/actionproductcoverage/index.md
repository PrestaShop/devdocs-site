---
title: "actionProductCoverage"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionproductcoverage/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionProductCoverage.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec(
                'actionProductCoverage',
                    [
                        'id_product' => $id_product,
                        'id_product_attribute' => $id_product_attribute,
                        'warehouse' => $warehouse,
                    ]
            )
```

