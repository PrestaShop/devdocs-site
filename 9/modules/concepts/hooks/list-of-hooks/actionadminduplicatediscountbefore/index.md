---
title: "actionAdminDuplicateDiscountBefore"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionadminduplicatediscountbefore/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionAdminDuplicateDiscountBefore.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
$this->hookDispatcher->dispatchWithParameters(
            'actionAdminDuplicateDiscountBefore',
            ['id_discount' => $oldDiscountId]
        );
```

