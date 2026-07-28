---
title: "actionCustomerBeforeUpdateGroup"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actioncustomerbeforeupdategroup/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionCustomerBeforeUpdateGroup.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionCustomerBeforeUpdateGroup', ['id_customer' => $this->id, 'groups' => $list])
```

