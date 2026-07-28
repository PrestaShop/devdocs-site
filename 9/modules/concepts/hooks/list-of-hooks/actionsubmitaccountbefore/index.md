---
title: "actionSubmitAccountBefore"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionsubmitaccountbefore/"
version: "9"
description: "This hook is called before a customer account creation"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionSubmitAccountBefore.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
$hookResult = array_reduce(
    Hook::exec('actionSubmitAccountBefore', [], null, true),
    function ($carry, $item) {
        return $carry && $item;
    },
    true
);
```

