---
title: "display\u003cController\u003eHeader"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/displaycontrollerheader/"
version: "9"
description: "This hook is called in the construction of the HOOK_HEADER Smarty variable. It is used for common front page header content."
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/display\u003cController\u003eHeader.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
$this->context->smarty->assign([
    'HOOK_HEADER' => Hook::exec('displayHeader')
        . Hook::exec('display' . $this->getControllerName() . 'Header'),
]);
```

