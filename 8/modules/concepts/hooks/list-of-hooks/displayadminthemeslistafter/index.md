---
title: "displayAdminThemesListAfter"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/displayadminthemeslistafter/"
version: "8"
description: "This hook displays content after the themes list in the back office"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/displayAdminThemesListAfter.md"
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

```php
{{ renderhook('displayAdminThemesListAfter', { 'current_theme_name': currentlyUsedTheme.get('name') }) }}
```

