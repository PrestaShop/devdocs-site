---
title: "action\u003cController\u003eSetMedia"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actioncontrollersetmedia/"
version: "9"
description: "This hook is called after a Front Controller has registered its Stylesheets and Javascripts. You can register more files in this hook."
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/action\u003cController\u003eSetMedia.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('action' . $this->getControllerName() . 'SetMedia');
```

