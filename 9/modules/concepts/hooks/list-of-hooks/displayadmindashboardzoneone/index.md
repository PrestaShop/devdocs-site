---
title: "displayAdminDashboardZoneOne"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/displayadmindashboardzoneone/"
version: "9"
description: "Displays module content in the first column of the migrated (Symfony) dashboard page. Modern counterpart of the legacy dashboardZoneOne hook."
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/displayAdminDashboardZoneOne.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
$hookDispatcher->dispatchRenderingWithParameters('displayAdminDashboardZoneOne', ['date_from' => $dateFrom, 'date_to' => $dateTo])
```

