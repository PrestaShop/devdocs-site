---
title: "actionAuthentication"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionauthentication/"
version: "9"
description: "This hook is displayed after a customer successfully signs in"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionAuthentication.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionAuthentication', ['customer' => $this->context->customer])
```

