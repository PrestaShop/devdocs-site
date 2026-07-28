---
title: "displayBackOfficeEmployeeMenu"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/displaybackofficeemployeemenu/"
version: "9"
description: "This hook is displayed in the employee menu"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/displayBackOfficeEmployeeMenu.md"
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
