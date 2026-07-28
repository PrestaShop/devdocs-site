---
title: "actionGetIDZoneByAddressID"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actiongetidzonebyaddressid/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionGetIDZoneByAddressID.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
$id_zone = Hook::exec('actionGetIDZoneByAddressID', ['id_address' => $id_address])
```

