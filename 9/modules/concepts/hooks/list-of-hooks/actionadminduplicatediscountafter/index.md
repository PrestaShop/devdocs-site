---
title: "actionAdminDuplicateDiscountAfter"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionadminduplicatediscountafter/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionAdminDuplicateDiscountAfter.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
$this->hookDispatcher->dispatchWithParameters(
            'actionAdminDuplicateDiscountAfter',
            ['id_discount' => $oldDiscountId, 'id_discount_new' => $newDiscountId->getValue()]
        );
```

