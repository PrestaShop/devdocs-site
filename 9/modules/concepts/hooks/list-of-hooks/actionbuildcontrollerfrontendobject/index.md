---
title: "actionBuild\u003cController\u003eFrontEndObject"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionbuildcontrollerfrontendobject/"
version: "9"
description: "This hook is called after the \"prestashop\" javascript object has been built to be sent to the front end. You can add/edit/remove variables from the array passed by reference. Those variables will be inserted in the \"prestashop\" javascript object."
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionBuild\u003cController\u003eFrontEndObject.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionBuild' . $this->getControllerName() . 'FrontEndObject', [
    'obj' => &$object,
]);
```

