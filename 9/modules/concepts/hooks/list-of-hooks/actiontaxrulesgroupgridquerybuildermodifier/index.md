---
title: "actionTaxRulesGroupGridQueryBuilderModifier"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actiontaxrulesgroupgridquerybuildermodifier/"
version: "9"
description: "This hook allows to alter Doctrine query builder for tax rules group grid"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionTaxRulesGroupGridQueryBuilderModifier.md"
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

