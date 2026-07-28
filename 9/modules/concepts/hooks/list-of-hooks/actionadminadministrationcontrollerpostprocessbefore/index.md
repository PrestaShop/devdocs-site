---
title: "actionAdminAdministrationControllerPostProcessBefore"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionadminadministrationcontrollerpostprocessbefore/"
version: "9"
description: "This hook is called on Admin Configure Advanced Parameters Administration post-process before processing any form"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionAdminAdministrationControllerPostProcessBefore.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
$this->dispatchHookWithParameters('actionAdminAdministrationControllerPostProcessBefore', ['controller' => $this]);
```

