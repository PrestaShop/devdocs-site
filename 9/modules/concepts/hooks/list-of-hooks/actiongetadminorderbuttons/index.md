---
title: "actionGetAdminOrderButtons"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actiongetadminorderbuttons/"
version: "9"
description: "This hook is used to generate the buttons collection on the order view page (see ActionsBarButtonsCollection)"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionGetAdminOrderButtons.md"
---


{{% hookDescriptor %}}

## Parameters details

```php
    <?php
    array(
       'controller' => (OrderController) Symfony controller,
       'id_order' => (int) Order ID,
       'actions_bar_buttons_collection' => (ActionsBarButtonsCollection) Collection of ActionsBarButtonInterface
    );
```

## Call of the Hook in the origin file

```php
$this->dispatchHookWithParameters(
    'actionGetAdminOrderButtons',
    [
        'controller' => $this,
        'id_order' => $orderId,
        'actions_bar_buttons_collection' => $backOfficeOrderButtons,
    ]
);
```

## Example implementation

This hook has been implemented as an example in our [modules examples repository - demovieworderhooks](https://github.com/PrestaShop/example-modules/tree/master/demovieworderhooks).

