---
title: "action\u003cDefinitionId\u003eGridDefinitionModifier"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actiondefinitionidgriddefinitionmodifier/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/action\u003cDefinitionId\u003eGridDefinitionModifier.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
$this->hookDispatcher->dispatchWithParameters('action' . Container::camelize($definition->getId()) . 'GridDefinitionModifier', [
    'definition' => $definition,
]);
```

## Example implementation

This hook has been implemented as an example in our [modules examples repository - demoextendgrid](https://github.com/PrestaShop/example-modules/tree/8.x/demoextendgrid).

This hook has been implemented as an example in our [modules examples repository - demoextendsymfonyform1](https://github.com/PrestaShop/example-modules/tree/8.x/demoextendsymfonyform1).

This hook has been implemented as an example in our [modules examples repository - demoextendsymfonyform3](https://github.com/PrestaShop/example-modules/tree/8.x/demoextendsymfonyform3).

