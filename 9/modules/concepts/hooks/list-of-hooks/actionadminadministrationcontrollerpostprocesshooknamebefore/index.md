---
title: "actionAdminAdministrationControllerPostProcess\u003cHookName\u003eBefore"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionadminadministrationcontrollerpostprocesshooknamebefore/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionAdminAdministrationControllerPostProcess\u003cHookName\u003eBefore.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
dispatchHook(
            'actionAdminAdministrationControllerPostProcess' . $hookName . 'Before',
            ['controller' => $this]
        )
```

