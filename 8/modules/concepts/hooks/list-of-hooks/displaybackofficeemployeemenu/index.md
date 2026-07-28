---
title: "displaybackOfficeEmployeeMenu"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/displaybackofficeemployeemenu/"
version: "8"
description: "This hook is displayed in the employee menu"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/displayBackOfficeEmployeeMenu.md"
---


{{% hookDescriptor %}}

## Parameters details

```php
    <?php
    [
        'links' => (ActionsBarButtonsCollection) $menuLinksCollections,
    ]
```

## Call of the Hook in the origin file

```php
dispatchWithParameters(
            'displaybackOfficeEmployeeMenu',
            [
                'links' => $menuLinksCollections,
            ]
        )
```


