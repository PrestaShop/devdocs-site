---
title: "ColorColumn reference"
url: "https://devdocs.prestashop-project.org/1.7/development/components/grid/columns-reference/color/"
version: "1.7"
source: "https://github.com/PrestaShop/docs/blob/1.7.x/development/components/grid/columns-reference/color.md"
---


# ColorColumn Type

It is used to display a color field data as a background-colored badge in Grid.

## Available options 

| Properties | Type   | Expected value                                               |
| ---------- | ------ | ------------------------------------------------------------ |
| **field**  | string | **required** The record field name that the column displays. |
| **color_field**  | string | **required** The field name of the color to display. |

## Example usage

```php
<?php
use PrestaShop\PrestaShop\Core\Grid\Column\Type\ColorColumn;
use PrestaShop\PrestaShop\Core\Grid\Column\ColumnCollection;

$colorColumn = new ColorColumn('color');
$colorColumn->setName('color');
$colorColumn->setOptions([
     'field' => 'color',
     'color_field' => 'color'
]);

$columns = new ColumnCollection();
$columns->add($colorColumn);
```

