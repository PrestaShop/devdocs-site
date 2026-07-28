---
title: "ImageColumn reference"
url: "https://devdocs.prestashop-project.org/8/development/components/grid/columns-reference/image/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/development/components/grid/columns-reference/image.md"
---


# ImageColumn Type

This column is used to display an image from a row. You need to specify which field of the row contains the image source.

## Available options

| Properties    | Type   | Expected value                                                          |
| ------------- | ------ | ----------------------------------------------------------------------- |
| **src_field** | string | **required** Indicates which field of the row contains the image source |

## Example usage

```php
<?php
use PrestaShop\PrestaShop\Core\Grid\Column\Type\Common\ImageColumn;
use PrestaShop\PrestaShop\Core\Grid\Column\ColumnCollection;

$imageColumn = new ImageColumn('flag');
$imageColumn->setName('Flag');
$imageColumn->setOptions([
     'src_field' => 'flag',
]);

$columns = new ColumnCollection();
$columns->add($imageColumn);
```

