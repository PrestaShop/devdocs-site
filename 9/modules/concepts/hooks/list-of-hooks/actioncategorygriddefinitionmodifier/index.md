---
title: "actionCategoryGridDefinitionModifier"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actioncategorygriddefinitionmodifier/"
version: "9"
description: "This hook allows to alter category grid columns, actions and filters"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionCategoryGridDefinitionModifier.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
$this->hookDispatcher->dispatchWithParameters('action' . Container::camelize($definition->getId()) . 'GridDefinitionModifier', [
    'definition' => $definition,
]);
```

