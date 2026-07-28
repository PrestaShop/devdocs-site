---
title: "overrideImageLink"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/overrideimagelink/"
version: "9"
description: "Allows to fully override the image URL returned by the getImageLink() method."
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/overrideImageLink.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec(
            'overrideImageLink',
            [
                'name' => $name,
                'ids' => $idImage,
                'type' => $type,
                'extension' => $extension,
            ],
            null,
            true
        );
```

