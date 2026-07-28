---
title: "actionWatermark"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionwatermark/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionWatermark.md"
---


{{% hookDescriptor %}}

## Parameters details

```php
    <?php
    array(
      'id_image' => (int) Image ID,
      'id_product' => (int) Product ID
    );
```

## Call of the Hook in the origin file

```php
dispatchWithParameters(
            'actionWatermark',
            ['id_image' => $imageId->getValue(), 'id_product' => $productId]
        )
```

