---
title: "displayAdminProductsCombinationBottom"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/displayadminproductscombinationbottom/"
version: "8"
description: "This hook launches modules when the back office product page is displayed"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/displayAdminProductsCombinationBottom.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
{{ renderhook('displayAdminProductsCombinationBottom', { 'id_product': form.vars.value.id_product, 'id_product_attribute': form.vars.value.id_product_attribute }) }}
```

