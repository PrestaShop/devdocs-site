---
title: "How to customize the Grid templates"
url: "https://devdocs.prestashop-project.org/9/development/components/grid/tutorials/customize-templates/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/development/components/grid/tutorials/customize-templates.md"
---


# How to customize the Grid templates

The Grid component is highly extensible from a structural and data point of view, but sometimes you need
to customize how a grid, a row or a specific column is rendered.

For instance, let's take a look at the Logs page of the PrestaShop Back Office. You can see that the "Employee" column have a specific rendering:

{{< figure src="../../img/logs_grid.png" title="Logs grid of PrestaShop with specific employee Column" >}}

In this tutorial, we will learn how to customize the rendering of every part of a Grid:

* Templating architecture in Twig
* Column & Column headers customization
* Row customization

## Templating architecture in Twig

The templating of the Grid component uses Twig. As the component enforces a strict separation between the data and the rendering you never define template names or UI elements when defining a new Grid.

We have created a Twig layer that is able to render Grid using the information from Grid that is formatted in Grid presenter.

{{% notice tip %}}
This means that, by implementing your own presenter, you can control the data sent to the user.
{{% /notice %}}

### How it works under the hood?

Each element of the Grid have its own Twig template:

```
Grid
├── Actions
│   ├── Bulk
│   ├── Grid
│   └── Row
├── Blocks
│   ├── bulk_actions.html.twig
│   ├── bulk_actions_select_all.html.twig
│   ├── EmptyState
│   ├── grid_actions.html.twig
│   ├── pagination.html.twig
│   ├── Table
│   └── table.html.twig
├── Columns
│   ├── Content
│   └── Header
├── grid.html.twig
└── grid_panel.html.twig
```

Let's detail every part of this architecture:

### Grid Actions templating

Grid actions templates are responsible of the rendering of all the Grid actions:

* The **Bulk** actions;
* The **Grid** actions;
* The **Row** actions;

Structure of grid blocks:

```
Actions
├── Bulk
│   ├── delete_categories.html.twig
│   ├── delete_customers.html.twig
│   └── submit.html.twig
├── Grid
│   ├── link.html.twig
│   ├── simple.html.twig
│   └── submit.html.twig
└── Row
    ├── delete_category.html.twig
    ├── delete_customer.html.twig
    ├── link.html.twig
    └── submit.html.twig
```

As you can see, every action defined at any Grid Level (Bulk, Grid or Row) will be rendered using its own template.

Like we are already able to do with the main Back Office templates, in modules you can define and override existing templates and adapt them to your needs.

```
your-module/
    ├── ...
    ├── your-module.php
    └── views/PrestaShop/Admin/Common/Grid/Blocks/Table/filters_row.html.twig
    # Override of the filters row template
```

## The Grid Blocks

In this folder, you will retrieve most of the reusable blocks of the Grid component.

Structure of grid actions:

```
Blocks
├── bulk_actions.html.twig
├── bulk_actions_select_all.html.twig
├── EmptyState
│   ├── _default.html.twig
│   └── supplier.html.twig
├── grid_actions.html.twig
├── pagination.html.twig
├── Table
│   ├── empty_row.html.twig
│   ├── filters_row.html.twig
│   └── headers_row.html.twig
└── table.html.twig
```

The templates have meaningful names so you will spot the reponsibility
of most of them:

* The **bulk actions** templates are responsible of the rendering of the parent container of the bulk action templates;
* The **grid actions** templates are responsible of the rendering of the parent container of the grid action templates;
* All **table** related templates are responsible of the rendering of the Table structure of the Grid (we could name it "Grid" too as you're not forced to use an HTML table to render a Grid!);
* The **empty state** templates define the rendering of the Grid in case you have no data to render;
* Finally, the **pagination** template is responsible of... guess what? the rendering of the pagination system! Obvious 😎.

{{% notice note %}}
Customize these templates when you want to alter the rendering of the structure of your Grids.
{{% /notice %}}


## The Columns Contents and Headers

Most of the time, you want to customize the rendering of the columns. While we can re-order add or delete columns using hooks, the Twig layer allows you to alter the rendering of a column at Shop, Grid or even Column level.

It's not a surprise that you will retrieve a template named after the available Column Types provided by the Core of PrestaShop! The Twig layer relies on the information sent by the Grid presenter to select the right Twig template to be rendered and to push the right information.

This is the content of this folder:

```
Columns
├── Content
│   ├── action.html.twig
│   ├── badge.html.twig
│   ├── bulk_action.html.twig
│   ├── category_position.html.twig
│   ├── data.html.twig
│   ├── date_time.html.twig
│   ├── employee_name_with_avatar.html.twig
│   ├── image.html.twig
│   ├── link.html.twig
│   ├── position_handle.html.twig
│   ├── position.html.twig
│   ├── severity_level.html.twig
│   └── toggle.html.twig
└── Header
    └── Content
        ├── action.html.twig
        ├── default.html.twig
        └── position_handle.html.twig
```

The templates of this folder are splitted into two subfolders:

* **Content**: contains the template for each type of Column;
* **Header/Content**: contains the template for each type of Column Header (in the current context, the column table header);

For each template, you can customize the rendering at different levels.
There is a simple rule to guess which template will be rendered: `{grid_id}_{column_id}_type_id` where `grid_id` and `column_id` are not required.

* If you define the template `{...}/Columns/Content/data.html.twig` in your module, this template will be overriden for the Back Office;
* If you define the template `{...}/Columns/Content/my_grid_data.html.twig` in your module, this template will be overriden for the Grid defined with the id *my_grid*;

And what will happens if you define the following template? `my-module/views/PrestaShop/Admin/Common/Grid/Columns/Content/my_grid_name_action.html.twig`

You're right, the template will be overriden *only* for the column type "action" with the id "name". So extensible and powerful!

