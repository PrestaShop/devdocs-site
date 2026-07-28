---
title: "SearchAndResetType"
url: "https://devdocs.prestashop-project.org/9/development/components/form/types-reference/search-and-reset-type/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/development/components/form/types-reference/search-and-reset-type.md"
---


# SearchAndResetType

FormType used in rendering of "Search and Reset" action in Grids.

- Namespace: PrestaShopBundle\Form\Admin\Type
- Reference: [SearchAndResetType](https://github.com/PrestaShop/PrestaShop/blob/9.1.x/src/PrestaShopBundle/Form/Admin/Type/SearchAndResetType.php)

## Type options

| Option       | Type   | Default value                     | Description                                                                               |
| :----------- | :----- | :-------------------------------- | :---------------------------------------------------------------------------------------- |

## Code example

- [AddressGridDefinitionFactory](https://github.com/PrestaShop/PrestaShop/blob/9.1.0/src/Core/Grid/Definition/Factory/AddressGridDefinitionFactory.php#L219-L229)

```php
->add(
    (new Filter('actions', SearchAndResetType::class))
        ->setAssociatedColumn('actions')
        ->setTypeOptions([
            'reset_route' => 'admin_common_reset_search_by_filter_id',
            'reset_route_params' => [
                'filterId' => self::GRID_ID,
            ],
            'redirect_route' => 'admin_addresses_index',
        ])
)
```

