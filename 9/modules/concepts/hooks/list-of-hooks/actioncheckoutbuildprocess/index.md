---
title: "actionCheckoutBuildProcess"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actioncheckoutbuildprocess/"
version: "9"
description: "This hook is triggered before the checkout is rendered. Modules may return a checkout process provider. The provider is used only when exactly one enabled and valid provider is available."
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionCheckoutBuildProcess.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionCheckoutBuildProcess', [], null, true);
```

