---
title: "action\u003cFormName\u003eFormBuilderModifier"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionformnameformbuildermodifier/"
version: "9"
description: "This hook allows to modify an identifiable object forms content by modifying form builder data or FormBuilder itself.\nReplace FormBuilderName by the identitiable object type."
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/action\u003cFormName\u003eFormBuilderModifier.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
$this->hookDispatcher->dispatchWithParameters('action' . $this->camelize($formBuilder->getName()) . 'FormBuilderModifier', [
    'form_builder' => $formBuilder,
    'data' => &$data,
    'options' => &$options,
    'id' => $id
]);
```

## Example implementation

This hook has been implemented as an example in our [modules examples repository - demoextendsymfonyform1](https://github.com/PrestaShop/example-modules/tree/master/demoextendsymfonyform1).

This hook has been implemented as an example in our [modules examples repository - demoextendsymfonyform2](https://github.com/PrestaShop/example-modules/tree/master/demoextendsymfonyform2).

This hook has been implemented as an example in our [modules examples repository - demoextendsymfonyform3](https://github.com/PrestaShop/example-modules/tree/master/demoextendsymfonyform3).

This hook has been implemented as an example in our [modules examples repository - demoproductform](https://github.com/PrestaShop/example-modules/tree/master/demoproductform).

This hook has been described in the context of Product Page in Back Office in [Extending the new product page form page]({{< relref "/9/modules/sample-modules/extend-product-page" >}})

