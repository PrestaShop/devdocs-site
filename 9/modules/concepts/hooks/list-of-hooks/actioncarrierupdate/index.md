---
title: "actionCarrierUpdate"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actioncarrierupdate/"
version: "9"
description: "This hook is called when a carrier is updated"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionCarrierUpdate.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionCarrierUpdate', [ 'id_carrier' => (int) $current_carrier->id, 'carrier' => $new_carrier, ])
```

