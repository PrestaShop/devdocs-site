---
title: "actionGetCartRuleContextualValue"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actiongetcartrulecontextualvalue/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionGetCartRuleContextualValue.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec(
            'actionGetCartRuleContextualValue',
            [
                'cart_rule' => $this,
                'use_tax' => $use_tax,
                'context' => $context,
                'filter' => $filter,
                'package' => $package,
                'use_cache' => $use_cache,
                'contextualValueFromModules' => &$contextualValueFromModules,
            ]
        );
```

