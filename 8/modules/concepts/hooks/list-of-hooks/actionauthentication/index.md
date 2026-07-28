---
title: "actionAuthentication"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionauthentication/"
version: "8"
description: "This hook is displayed after a customer successfully signs in"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionAuthentication.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionAuthentication', ['customer' => $this->context->customer])
```

