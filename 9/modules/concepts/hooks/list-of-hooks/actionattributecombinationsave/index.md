---
title: "actionAttributeCombinationSave"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionattributecombinationsave/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionAttributeCombinationSave.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionAttributeCombinationSave', ['id_product_attribute' => (int) $this->id, 'id_attributes' => $idsAttribute])
```

