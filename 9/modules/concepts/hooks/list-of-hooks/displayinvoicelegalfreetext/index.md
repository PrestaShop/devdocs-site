---
title: "displayInvoiceLegalFreeText"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/displayinvoicelegalfreetext/"
version: "9"
description: "This hook allows you to modify the legal free text on PDF invoices"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/displayInvoiceLegalFreeText.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
$legal_free_text = Hook::exec('displayInvoiceLegalFreeText', ['order' => $this->order])
```

