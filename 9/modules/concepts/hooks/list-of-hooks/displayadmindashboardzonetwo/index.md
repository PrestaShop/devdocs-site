---
title: "displayAdminDashboardZoneTwo"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/displayadmindashboardzonetwo/"
version: "9"
description: "Displays module content in the second column of the migrated (Symfony) dashboard page. Modern counterpart of the legacy dashboardZoneTwo hook."
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/displayAdminDashboardZoneTwo.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
$hookDispatcher->dispatchRenderingWithParameters('displayAdminDashboardZoneTwo', ['date_from' => $dateFrom, 'date_to' => $dateTo])
```

