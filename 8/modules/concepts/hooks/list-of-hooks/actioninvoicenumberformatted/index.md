---
title: "actionInvoiceNumberFormatted"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actioninvoicenumberformatted/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionInvoiceNumberFormatted.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionInvoiceNumberFormatted', [
            get_class($this) => $this,
            'id_lang' => (int) $id_lang,
            'id_shop' => (int) $id_shop,
            'number' => (int) $this->number,
        ])
```

