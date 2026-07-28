---
title: "DataColumn reference"
url: "https://devdocs.prestashop-project.org/1.7/development/components/grid/columns-reference/data/"
version: "1.7"
source: "https://github.com/PrestaShop/docs/blob/1.7.x/development/components/grid/columns-reference/data.md"
---


# DataColumn Type
{{< minver v="1.7.5" title="true" >}}

The most basic column is DataColumn. It is used to display raw field data in Grid.

## Available options

| Properties | Type   | Expected value                                               |
| ---------- | ------ | ------------------------------------------------------------ |
| **field**  | string | **required** The record field name that the column displays. |

## Example usage

```php
<?php
use PrestaShop\PrestaShop\Core\Grid\Column\Type\DataColumn;
use PrestaShop\PrestaShop\Core\Grid\Column\ColumnCollection;

$dataColumn = new DataColumn('id_product');
$dataColumn->setName('ID');
$dataColumn->setOptions([
     'field' => 'id_product',
]);

$columns = new ColumnCollection();
$columns->add($dataColumn);
```

