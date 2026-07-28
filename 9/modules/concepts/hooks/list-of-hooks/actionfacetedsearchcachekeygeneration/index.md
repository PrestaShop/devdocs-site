---
title: "actionFacetedSearchCacheKeyGeneration"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionfacetedsearchcachekeygeneration/"
version: "9"
description: "This hook allows modules to customize the cache key used by the Faceted Search module when caching filter blocks and results, especially for custom controllers and ad hoc listings."
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionFacetedSearchCacheKeyGeneration.md"
---


{{% hookDescriptor %}}

## Purpose

The `actionFacetedSearchCacheKeyGeneration` hook allows modules to **alter the cache key** used by the Faceted Search module when caching filter blocks and search results.

It has been introduced to complement the hooks `actionFacetedSearchSetSupportedControllers` and `actionFacetedSearchFilters`, ensuring that **custom controllers or specific filter configurations** can also define a **distinct cache key**, preventing cache collisions between different listings.

Typical use cases include:

- adding a **custom controller identifier** to the cache key;
- appending an **entity ID** (for example, a custom listing bound to a specific feature or category);
- differentiating cache entries for various **ad hoc product listings** that share similar filters but are rendered on different pages.

## Parameters available

The hook receives an array of parameters:

| Parameter             | Type                                                                  | Description                                                                                         |
|-----------------------|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| filterKey             | string (passed **by reference**)                                      | The current cache key string. You can append or modify it to make the cache entry more specific.   |
| query                 | PrestaShop\\PrestaShop\\Core\\Product\\Search\\ProductSearchQuery | The product search query used for the current listing.                                              |
| facetedSearchFilters  | PrestaShop\\Module\\FacetedSearch\\Filters (passed **by reference**)  | The faceted search filters object used to build the cache entry and execute the search.            |

> **Note:** `filterKey` and `facetedSearchFilters` are passed **by reference**, so changes applied inside the hook implementation will directly affect the cache key generation process.

## Example usage

```php
use PrestaShop\PrestaShop\Core\Product\Search\ProductSearchQuery;
use PrestaShop\Module\FacetedSearch\Filters;

public function hookActionFacetedSearchCacheKeyGeneration(array $params): void
{
    /** @var string $filterKey */
    $filterKey =& $params['filterKey'];

    /** @var ProductSearchQuery $query */
    $query = $params['query'];

    /** @var Filters $facetedSearchFilters */
    $facetedSearchFilters =& $params['facetedSearchFilters'];

    // Example: distinguish cache entries for a custom product listing controller
    if (Tools::getValue('controller') === 'mycustomproductlisting') {
        $customEntityId = (int) Tools::getValue('id_my_entity');

        // Append a custom suffix to the cache key so each entity has its own cached filters
        $filterKey .= sprintf('-mycustomproductlisting-%d', $customEntityId);
    }
}
```

## Call of the Hook in the origin file

```php
Hook::exec(
    'actionFacetedSearchCacheKeyGeneration',
    [
        'filterKey' => &$filterKey,
        'query' => $query,
        'facetedSearchFilters' => &$facetedSearchFilters,
    ]
);
```

