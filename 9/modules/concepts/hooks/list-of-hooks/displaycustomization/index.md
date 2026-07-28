---
title: "displayCustomization"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/displaycustomization/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/displayCustomization.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('displayCustomization', ['customization' => $row], (int) $row['id_module'])
```

