---
title: "actionBuildMailLayoutVariables"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionbuildmaillayoutvariables/"
version: "9"
description: "This hook allows to change the variables used when an email layout is rendered"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionBuildMailLayoutVariables.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
$this->hookDispatcher->dispatchWithParameters(
    LayoutVariablesBuilderInterface::BUILD_MAIL_LAYOUT_VARIABLES_HOOK,
    [
        'mailLayout' => $mailLayout,
        'mailLayoutVariables' => &$mailLayoutVariables,
    ]
);
```

## Example implementation

This hook has been implemented as an example in our [modules examples repository - example_module_mailtheme](https://github.com/PrestaShop/example-modules/blob/master/example_module_mailtheme).

