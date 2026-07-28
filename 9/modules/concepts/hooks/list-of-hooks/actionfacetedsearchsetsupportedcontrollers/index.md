---
title: "actionFacetedSearchSetSupportedControllers"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionfacetedsearchsetsupportedcontrollers/"
version: "9"
description: "This hook allows modules to declare additional controllers that should support Faceted Search filters. These controllers will appear in the module configuration template as eligible for displaying faceted filters."
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionFacetedSearchSetSupportedControllers.md"
---


{{% hookDescriptor %}}

## Purpose

The `actionFacetedSearchSetSupportedControllers` hook allows third-party modules to **append custom controllers** to the list of controllers supported by the *ps_facetedsearch* module.

This makes it possible to **enable faceted filters on non-standard pages**, such as custom product listings, landing pages or other bespoke front controllers.

## Parameters available

The hook receives an array of parameters:

| Parameter           | Type  | Description                                                                 |
|---------------------|-------|-----------------------------------------------------------------------------|
| supportedControllers | array | Associative array of supported controllers, passed **by reference**.       |

The `supportedControllers` array is passed **by reference**, so you can modify it directly. The structure follows the one used internally by the module, for example:

```php
[
    'category' => [
        'name' => 'Category',
        'cacheable' => true,
    ],
    'manufacturer' => [
        'name' => 'Brand',
        'cacheable' => true,
    ],
    // ...
];
```

## Example usage

```php
public function hookActionFacetedSearchSetSupportedControllers(array $params): void
{
    // Add a custom front controller that should support Faceted Search filters
    $params['supportedControllers']['mycustomproductlisting'] = [
        'name' => $this->trans('Custom product listing', [], 'Modules.Custommodule.Front'),
        'cacheable' => true,
    ];
}
```

## Call of the Hook in the origin file

```php
Hook::exec(
    'actionFacetedSearchSetSupportedControllers',
    [
        'supportedControllers' => &$supportedControllers,
    ]
);
```

