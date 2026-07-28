---
title: "actionPaymentCCAdd"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionpaymentccadd/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionPaymentCCAdd.md"
---


{{% hookDescriptor %}}

## Parameters details

```php
    <?php
    array(
      'paymentCC' => (object) OrderPayment object
    );
```

## Call of the Hook in the origin file

```php
Hook::exec('actionPaymentCCAdd', ['paymentCC' => $this])
```

