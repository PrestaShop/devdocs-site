---
title: "displayAdminDashboardTop"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/displayadmindashboardtop/"
version: "9"
description: "Displays module content in the top area of the migrated (Symfony) dashboard page. Modern counterpart of the legacy displayDashboardTop hook."
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/displayAdminDashboardTop.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```twig
{{ renderhook('displayAdminDashboardTop', {date_from: dateFrom, date_to: dateTo}) }}
```

