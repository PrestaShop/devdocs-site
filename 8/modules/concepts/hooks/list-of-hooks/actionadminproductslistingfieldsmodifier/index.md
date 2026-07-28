---
title: "actionAdminProductsListingFieldsModifier"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionadminproductslistingfieldsmodifier/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionAdminProductsListingFieldsModifier.md"
---


{{% hookDescriptor %}}

## Parameters details

```php
    <?php
    array(
      '_ps_version' => (string) PrestaShop version,
      'sql_select' => &(array),
      'sql_table' => &(array),
      'sql_where' => &(array),
      'sql_order' => &(array),
      'sql_limit' => &(string),
    );
```

## Call of the Hook in the origin file

```php
Hook::exec('actionAdminProductsListingFieldsModifier', [
            '_ps_version' => AppKernel::VERSION,
            'sql_select' => &$sqlSelect,
            'sql_table' => &$sqlTable,
            'sql_where' => &$sqlWhere,
            'sql_group_by' => &$sqlGroupBy,
            'sql_order' => &$sqlOrder,
            'sql_limit' => &$sqlLimit,
        ])
```

