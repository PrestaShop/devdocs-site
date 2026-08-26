---
title: "displayAdminDashboardZoneThree"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/displayadmindashboardzonethree/"
version: "9"
description: "Displays module content in the third column of the migrated (Symfony) dashboard page. Modern counterpart of the legacy dashboardZoneThree hook."
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/displayAdminDashboardZoneThree.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
$hookDispatcher->dispatchRenderingWithParameters('displayAdminDashboardZoneThree', ['date_from' => $dateFrom, 'date_to' => $dateTo])
```

