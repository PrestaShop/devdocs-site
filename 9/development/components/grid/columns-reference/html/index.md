---
title: "HtmlColumn reference"
url: "https://devdocs.prestashop-project.org/9/development/components/grid/columns-reference/html/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/development/components/grid/columns-reference/html.md"
---


# HtmlColumn Type

Displays raw data without any escaping. Can be used to display HTML in grid.

{{% notice warning %}}
Using this column could open you to XSS attacks, if you are using this column take steps to make sure that data displayed by this column is secure.
If you are using form together with grid, safe way is to use [FormattedTextareaType ]({{< ref "/9/development/components/form/types-reference/formatted-textarea" >}}).
{{% /notice %}}

## Available options

| Properties | Type   | Expected value                                               |
| ---------- | ------ | ------------------------------------------------------------ |
| **field**  | string | **required** The record field name that the column displays. |

## Example usage

```php
<?php
use PrestaShop\PrestaShop\Core\Grid\Column\Type\Common\HtmlColumn;
use PrestaShop\PrestaShop\Core\Grid\Column\ColumnCollection;

$htmlColumn = new HtmlColumn('description');
$htmlColumn->setName('Description');
$htmlColumn->setOptions([
     'field' => 'description',
]);

$columns = new ColumnCollection();
$columns->add($htmlColumn);
```

