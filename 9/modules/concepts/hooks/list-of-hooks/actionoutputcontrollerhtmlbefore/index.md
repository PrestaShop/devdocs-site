---
title: "actionOutput\u003cController\u003eHTMLBefore"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionoutputcontrollerhtmlbefore/"
version: "9"
description: "This hook is called just before Smarty output the HTML Content of the page. You can edit the HTML passed by reference."
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionOutput\u003cController\u003eHTMLBefore.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionOutput' . $this->getControllerName() . 'HTMLBefore', ['html' => &$html]);
```

