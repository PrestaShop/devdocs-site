---
title: "displayAdminOrderTabContent"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/displayadminordertabcontent/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/displayAdminOrderTabContent.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
{% set displayAdminOrderTabContent = renderhook('displayAdminOrderTabContent', {'id_order': orderForViewing.id}) %}
```

## Example implementation

This hook has been implemented as an example in our [modules examples repository - demovieworderhooks](https://github.com/PrestaShop/example-modules/tree/master/demovieworderhooks).

