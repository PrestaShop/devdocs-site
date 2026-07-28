---
title: "actionAfterCreate\u003cFormName\u003eFormHandler"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionaftercreateformnameformhandler/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionAfterCreate\u003cFormName\u003eFormHandler.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
dispatchWithParameters('actionAfterCreate' . Container::camelize($form->getName()) . 'FormHandler', [
            'id' => $id,
            'form_data' => &$data,
        ])
```

## Example implementation

This hook has been implemented as an example in our [modules examples repository - demoextendsymfonyform1](https://github.com/PrestaShop/example-modules/tree/8.x/demoextendsymfonyform1).

This hook has been implemented as an example in our [modules examples repository - demoextendsymfonyform2](https://github.com/PrestaShop/example-modules/tree/8.x/demoextendsymfonyform2).

This hook has been implemented as an example in our [modules examples repository - demoextendsymfonyform3](https://github.com/PrestaShop/example-modules/tree/8.x/demoextendsymfonyform3).

