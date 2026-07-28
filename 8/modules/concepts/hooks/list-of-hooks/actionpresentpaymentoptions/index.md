---
title: "actionPresentPaymentOptions"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionpresentpaymentoptions/"
version: "8"
description: "This hook is called before payment options are presented"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionPresentPaymentOptions.md"
---


{{% hookDescriptor %}}

## Parameters details

```php
    <?php
    [
        'paymentOptions' => (array) &$paymentOptions,
    ]
```

## Call of the Hook in the origin file

```php
Hook::exec('actionPresentPaymentOptions',
            ['paymentOptions' => &$paymentOptions]
        )
```

