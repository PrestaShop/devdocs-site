---
title: "dashboardZoneThree"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/dashboardzonethree/"
version: "8"
description: "This hook is displayed in the third column of the dashboard"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/dashboardZoneThree.md"
---


{{% hookDescriptor %}}

## Parameters details

```php
    <?php
    [
        'date_from' => (string|null) $statsDateFrom,
        'date_to' => (string|null) $statsDateTo,
    ]
```

## Call of the Hook in the origin file

```php
Hook::exec('dashboardZoneThree', $params)
```

