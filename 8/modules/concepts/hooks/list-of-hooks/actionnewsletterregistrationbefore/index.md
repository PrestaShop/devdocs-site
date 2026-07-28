---
title: "actionNewsletterRegistrationBefore"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionnewsletterregistrationbefore/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionNewsletterRegistrationBefore.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec(
            'actionNewsletterRegistrationBefore',
            [
                'hookName' => $hookName,
                'email' => $_POST['email'],
                'action' => $_POST['action'],
                'hookError' => &$hookError,
            ]
        )
```

