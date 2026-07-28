---
title: "ActionColumn reference"
url: "https://devdocs.prestashop-project.org/9/development/components/grid/columns-reference/action/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/development/components/grid/columns-reference/action.md"
---


# ActionColumn Type

This column type allows adding actions to your Grid rows. The action targets the corresponding row.
For more info about possible actions see [Actions reference][actions-reference].

## Available options

| Properties  | Type  | Expected value                                            |
| ----------- | ----- | --------------------------------------------------------- |
| **actions** | array | **default:** `null` List of actions assigned to each row. |

## Example usage

```php
<?php
use PrestaShop\PrestaShop\Core\Grid\Column\Type\Common\ActionColumn;
use PrestaShop\PrestaShop\Core\Grid\Column\ColumnCollection;
use PrestaShop\PrestaShop\Core\Grid\Action\Row\Type\LinkRowAction;
use PrestaShop\PrestaShop\Core\Grid\Action\Row\RowActionCollection;

$actionColumn = new ActionColumn('actions');
$actionColumn->setName('Actions');
$actionColumn->setOptions([
     'actions' => (new RowActionCollection())
        ->add((new LinkRowAction('delete'))
            ->setIcon('delete')
            ->setOptions([
                'route' => 'admin_custom_route',
                'route_param_name' => 'mailId',
                'route_param_field' => 'id_mail',
                'confirm_message' => 'Delete selected item?',
            ])
        )
]);

$columns = new ColumnCollection();
$columns->add($actionColumn);
```

[actions-reference]: {{< ref "/9/development/components/grid/actions-reference/" >}}

