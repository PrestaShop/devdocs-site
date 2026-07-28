---
title: "actionFacetedSearchFilters"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionfacetedsearchfilters/"
version: "9"
description: "This hook allows modules to customize the initial state of the Faceted Search query and its filters before results are computed."
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionFacetedSearchFilters.md"
---


{{% hookDescriptor %}}

## Purpose

The `actionFacetedSearchFilters` hook allows modules to **customize the initial filters and query state** used by the Faceted Search engine for a given request.

It is typically used to:

- apply **default filters** on specific controllers or pages,
- restrict the **product pool** to a subset of products,
- adapt the query according to custom business rules before the standard faceted filters are applied.

## Parameters available

The hook receives an array of parameters:

| Parameter | Type                                                              | Description                                                                 |
|-----------|-------------------------------------------------------------------|-----------------------------------------------------------------------------|
| search    | PrestaShop\Module\FacetedSearch\Product\Search               | Faceted Search `Search` service instance handling the current computation. |
| query     | PrestaShop\Module\FacetedSearch\Product\SearchQueryInterface | Query object representing the current faceted search request.              |

The module is expected to interact with these objects using their public API to adjust the filters, product pool, or any other query-related configuration.

## Example usage

```php
public function hookActionFacetedSearchFilters(array $params): void
{
    /** @var PrestaShop\Module\FacetedSearch\Product\Search $search */
    $search = $params['search'];

    /** @var PrestaShop\Module\FacetedSearch\Product\SearchQueryInterface $query */
    $query = $params['query'];

    // Example: apply custom logic on the query before Faceted Search computes the results
    // (adjust filters, restrict product IDs, etc.)

    // Custom logic goes here...
}
```

## Call of the Hook in the origin file

```php
Hook::exec(
    'actionFacetedSearchFilters',
    [
        'search' => $this,
        'query' => $this->query,
    ]
);
```

