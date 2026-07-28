---
title: "actionNewsletterRegistrationAfter"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionnewsletterregistrationafter/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionNewsletterRegistrationAfter.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec(
    'actionNewsletterRegistrationAfter',
    [
        'hookName' => $hookName,
        'email' => $_POST['email'],
        'action' => $_POST['action'],
        'error' => &$this->error,
    ]
)
```

