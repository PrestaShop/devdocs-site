---
title: "displayAdminOrderTabLink"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/displayadminordertablink/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/displayAdminOrderTabLink.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
{% set displayAdminOrderTabLink = renderhook('displayAdminOrderTabLink', {'id_order': orderForViewing.id}) %}
```

## Example implementation

This hook has been implemented as an example in our [modules examples repository - demovieworderhooks](https://github.com/PrestaShop/example-modules/tree/8.x/demovieworderhooks).

