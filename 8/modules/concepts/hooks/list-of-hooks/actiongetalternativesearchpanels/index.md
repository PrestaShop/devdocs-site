---
title: "actionGetAlternativeSearchPanels"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actiongetalternativesearchpanels/"
version: "8"
description: "This hook allows to add an additional search panel for external providers in PrestaShop back office"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionGetAlternativeSearchPanels.md"
---


{{% hookDescriptor %}}

## Parameters details

```php
    <?php
    [
        'previous_search_panels' => (array) $searchPanels,
        'bo_query' => (string) $searchedExpression,
    ]
```

## Call of the Hook in the origin file

```php
Hook::exec(
            'actionGetAlternativeSearchPanels',
            [
                'previous_search_panels' => $searchPanels,
                'bo_query' => $searchedExpression,
            ],
            null,
            true
        )
```

