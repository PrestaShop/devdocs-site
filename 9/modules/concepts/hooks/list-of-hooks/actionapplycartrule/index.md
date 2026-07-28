---
title: "actionApplyCartRule"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionapplycartrule/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionApplyCartRule.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec(
            'actionApplyCartRule',
            [
                'cart_rule_calculator' => $this,
                'cart_rule_data' => $cartRuleData,
                'cart_rule' => $cartRule,
                'cart' => $cart,
                'with_free_shipping' => $withFreeShipping,
                'is_applied_by_modules' => &$isAppliedByModules,
            ]
        );
```

