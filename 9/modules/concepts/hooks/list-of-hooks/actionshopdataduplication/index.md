---
title: "actionShopDataDuplication"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionshopdataduplication/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionShopDataDuplication.md"
---


{{% hookDescriptor %}}

## Parameters details

```php
    <?php
    array(
      'old_id_shop' => (int) Old shop ID,
      'new_id_shop' => (int) New shop ID
    );
```

## Call of the Hook in the origin file

```php
Hook::exec('actionShopDataDuplication', [
    'old_id_shop' => (int) $old_id,
    'new_id_shop' => (int) $this->id,
], $m['id_module']);
```

