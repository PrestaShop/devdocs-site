---
title: "actionPDFInvoiceRender"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionpdfinvoicerender/"
version: "9"
description: "This hook is called when a PDF invoice is rendered from the Front Office and the Back Office"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionPDFInvoiceRender.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionPDFInvoiceRender', ['order_invoice_list' => $order_invoice_list])
```

