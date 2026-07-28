---
title: "actionGetAdminToolbarButtons"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actiongetadmintoolbarbuttons/"
version: "9"
description: "This hook allows you to define descriptions of buttons to add in any toolbar of the back office"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionGetAdminToolbarButtons.md"
---


{{% hookDescriptor %}}

## Parameters details

```php
    <?php
    [
        'controller' => (AdminController) $currentController,
        'toolbar_extra_buttons_collection' => (ActionsBarButtonsCollection) $toolbarButtonsCollection,
    ]
```

## Call of the Hook in the origin file

```php
Hook::exec('actionGetAdminToolbarButtons', [ 'controller' => $this, 'toolbar_extra_buttons_collection' => &$toolbarButtonsCollection, ])
```

