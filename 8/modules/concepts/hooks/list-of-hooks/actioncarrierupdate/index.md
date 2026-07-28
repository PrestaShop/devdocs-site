---
title: "actionCarrierUpdate"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actioncarrierupdate/"
version: "8"
description: "This hook is called when a carrier is updated"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionCarrierUpdate.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionCarrierUpdate', [
                                    'id_carrier' => (int) $current_carrier->id,
                                    'carrier' => $new_carrier,
                                ])
```

