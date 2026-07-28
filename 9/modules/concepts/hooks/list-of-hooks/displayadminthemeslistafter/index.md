---
title: "displayAdminThemesListAfter"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/displayadminthemeslistafter/"
version: "9"
description: "This hook displays content after the themes list in the back office"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/displayAdminThemesListAfter.md"
---


{{% hookDescriptor %}}

## Parameters details

```php
    <?php
    array(
    'current_theme_name' => (string) Name of the currently used theme
    );
```

## Call of the Hook in the origin file

```twig
{{ renderhook('displayAdminThemesListAfter', {current_theme_name: currentlyUsedTheme.get('name')}) }}
```

