---
title: "actionAfterUpdate\u003cFormName\u003eFormHandler"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionafterupdateformnameformhandler/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionAfterUpdate\u003cFormName\u003eFormHandler.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
dispatchWithParameters('actionAfterUpdate' . Container::camelize($form->getName()) . 'FormHandler', [
            'id' => $id,
            'form_data' => &$data,
        ])
```

## Example implementation

This hook has been implemented as an example in our [modules examples repository - demoextendsymfonyform1](https://github.com/PrestaShop/example-modules/tree/master/demoextendsymfonyform1).

This hook has been implemented as an example in our [modules examples repository - demoextendsymfonyform2](https://github.com/PrestaShop/example-modules/tree/master/demoextendsymfonyform2).

This hook has been implemented as an example in our [modules examples repository - demoextendsymfonyform3](https://github.com/PrestaShop/example-modules/tree/master/demoextendsymfonyform3).

This hook has been implemented as an example in our [modules examples repository - demoproductform](https://github.com/PrestaShop/example-modules/tree/master/demoproductform).

