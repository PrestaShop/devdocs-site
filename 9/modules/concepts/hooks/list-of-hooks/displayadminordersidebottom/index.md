---
title: "displayAdminOrderSideBottom"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/displayadminordersidebottom/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/displayAdminOrderSideBottom.md"
---


{{% hookDescriptor %}}

## Parameters details

```php
    <?php
    array(
      'id_order' => (int) Order ID
    );
```

## Call of the Hook in the origin file

```twig
{{ renderhook('displayAdminOrderSideBottom', {id_order: orderForViewing.id}) }}
```

## Example implementation

This hook has been implemented as an example in our [modules examples repository - demovieworderhooks](https://github.com/PrestaShop/example-modules/tree/master/demovieworderhooks).

