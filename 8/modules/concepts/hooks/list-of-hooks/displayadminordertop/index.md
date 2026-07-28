---
title: "displayAdminOrderTop"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/displayadminordertop/"
version: "8"
description: "This hook launches modules when the Order is displayed in the Back Office"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/displayAdminOrderTop.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
{% set displayAdminOrderTopHookContent = renderhook('displayAdminOrderTop', {'id_order': orderForViewing.id}) %}
```

## Example implementation

This hook has been implemented as an example in our [modules examples repository - demovieworderhooks](https://github.com/PrestaShop/example-modules/tree/8.x/demovieworderhooks).

