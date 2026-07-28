---
title: "actionGetMailLayoutTransformations"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actiongetmaillayouttransformations/"
version: "9"
description: "This hook allows to add/remove TransformationInterface used to generate an email layout"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionGetMailLayoutTransformations.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
dispatchWithParameters(
            MailTemplateRendererInterface::GET_MAIL_LAYOUT_TRANSFORMATIONS,
            [
                'mailLayout' => $mailLayout,
                'templateType' => $templateType,
                'layoutTransformations' => $templateTransformations,
            ]
        )
```

## Example implementation

This hook has been implemented as an example in our [modules examples repository - example_module_mailtheme](https://github.com/PrestaShop/example-modules/blob/master/example_module_mailtheme).

