---
title: "displayInvoiceLegalFreeText"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/displayinvoicelegalfreetext/"
version: "8"
description: "This hook allows you to modify the legal free text on PDF invoices"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/displayInvoiceLegalFreeText.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('displayInvoiceLegalFreeText', ['order' => $this->order])
```

