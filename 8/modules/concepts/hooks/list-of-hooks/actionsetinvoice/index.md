---
title: "actionSetInvoice"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionsetinvoice/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionSetInvoice.md"
---


{{% hookDescriptor %}}

## Parameters details

```php
    <?php
    array(
      'Order' => order object,
      'OrderInvoice' => order invoice object,
      'use_existing_payment' => (bool)
    );
```

## Call of the Hook in the origin file

```php
Hook::exec('actionSetInvoice', [
                    get_class($this) => $this,
                    get_class($order_invoice) => $order_invoice,
                    'use_existing_payment' => (bool) $use_existing_payment,
                ])
```

