---
title: "actionInvoiceNumberFormatted"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actioninvoicenumberformatted/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionInvoiceNumberFormatted.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
$invoice_formatted_number = Hook::exec('actionInvoiceNumberFormatted', [ get_class($this) => $this, 'id_lang' => (int) $id_lang, 'id_shop' => (int) $id_shop, 'number' => (int) $this->number, ])
```

