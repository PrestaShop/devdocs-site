---
title: "actionContactGridQueryBuilderModifier"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actioncontactgridquerybuildermodifier/"
version: "9"
description: "This hook allows to alter Doctrine query builder for contact grid"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionContactGridQueryBuilderModifier.md"
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

