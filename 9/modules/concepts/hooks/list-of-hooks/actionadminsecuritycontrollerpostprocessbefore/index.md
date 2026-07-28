---
title: "actionAdminSecurityControllerPostProcessBefore"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionadminsecuritycontrollerpostprocessbefore/"
version: "9"
description: "This hook is called on Admin Security Controller post-process before processing any form"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionAdminSecurityControllerPostProcessBefore.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
$this->dispatchHookWithParameters('actionAdminSecurityControllerPostProcessBefore', ['controller' => $this]);
```

