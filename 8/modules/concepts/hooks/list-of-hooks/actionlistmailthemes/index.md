---
title: "actionListMailThemes"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionlistmailthemes/"
version: "8"
description: "This hook allows to add/remove available email themes (ThemeInterface) and/or to add/remove their layouts (LayoutInterface)"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionListMailThemes.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
dispatchWithParameters(
            ThemeCatalogInterface::LIST_MAIL_THEMES_HOOK,
            ['mailThemes' => $mailThemes]
        )
```

## Example implementation

This hook has been implemented as an example in our [modules examples repository - example_module_mailtheme](https://github.com/PrestaShop/example-modules/blob/8.x/example_module_mailtheme).

