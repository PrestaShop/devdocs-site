---
title: "actionValidateCartRule"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionvalidatecartrule/"
version: "9"
description: "Allow modules to implement their own rules to validate a cart rule."
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionValidateCartRule.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec(
    'actionValidateCartRule',
    [
        'cart_rule' => $this,
        'cart' => $cart,
        'alreadyInCart' => $alreadyInCart,
        'display_error' => $display_error,
        'check_carrier' => $check_carrier,
        'useOrderPrices' => $useOrderPrices,
        'isValidatedByModules' => &$isValidatedByModules,
        'isValidatedByModulesError' => &$isValidatedByModulesError,
    ]
);
```

