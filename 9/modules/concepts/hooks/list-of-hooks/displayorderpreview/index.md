---
title: "displayOrderPreview"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/displayorderpreview/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/displayOrderPreview.md"
---


{{% hookDescriptor %}}

## Parameters details

```php
    <?php
    array(
      'order_id' => (integer) Order Id
    );
```

## Call of the Hook in the origin file

```php
{{ renderhook('displayOrderPreview', {order_id: orderId}) }}
```

