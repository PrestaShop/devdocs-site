---
title: "displayAdminCustomers"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/displayadmincustomers/"
version: "8"
description: "This hook launches modules when the AdminCustomers tab is displayed in the Back Office"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/displayAdminCustomers.md"
---


{{% hookDescriptor %}}

## Parameters details

```php
    <?php
    array(
      'id_customer' = (int) Customer ID
    );
```

## Call of the Hook in the origin file

```php
{{ renderhook('displayAdminCustomers', {'id_customer': customerInformation.customerId.value}) }}
```

