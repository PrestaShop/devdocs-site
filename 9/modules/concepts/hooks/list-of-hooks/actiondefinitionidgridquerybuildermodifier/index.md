---
title: "action\u003cDefinitionId\u003eGridQueryBuilderModifier"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actiondefinitionidgridquerybuildermodifier/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/action\u003cDefinitionId\u003eGridQueryBuilderModifier.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
$this->hookDispatcher->dispatchWithParameters('action' . Container::camelize($this->gridId) . 'GridQueryBuilderModifier', [
    'search_query_builder' => $searchQueryBuilder,
    'count_query_builder' => $countQueryBuilder,
    'search_criteria' => $searchCriteria,
]);
```

## Example implementation

This hook has been implemented as an example in our [modules examples repository - demoextendsymfonyform1](https://github.com/PrestaShop/example-modules/tree/master/demoextendsymfonyform1).

This hook has been implemented as an example in our [modules examples repository - demoextendsymfonyform3](https://github.com/PrestaShop/example-modules/tree/master/demoextendsymfonyform3).

