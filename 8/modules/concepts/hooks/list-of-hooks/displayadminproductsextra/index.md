---
title: "displayAdminProductsExtra"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/displayadminproductsextra/"
version: "8"
description: "This hook launches modules when the back office product page is displayed"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/displayAdminProductsExtra.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
{% set hooks = renderhooksarray('displayAdminProductsExtra', { 'id_product': id_product }) %}
```

## Example implementation

This hook has been implemented as an example in our [modules examples repository - demoproductform](https://github.com/PrestaShop/example-modules/tree/8.x/demoproductform).

