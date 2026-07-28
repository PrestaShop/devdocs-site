---
title: "actionUpdateDefaultCombinationAfter"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionupdatedefaultcombinationafter/"
version: "9"
description: "This hook is triggered after a product default combination is set (updated in database), allowing modules to react to the new default combination."
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionUpdateDefaultCombinationAfter.md"
---


{{% hookDescriptor %}}

## Purpose

The `actionUpdateDefaultCombinationAfter` hook allows modules to **react right after** the default combination of a product has been updated.

It is dispatched when a merchant sets a new default combination in the product page (Back Office).

## Parameters available

The hook receives an array of parameters:

| Parameter            | Type      | Description |
|--------------------- |-----------|-------------|
| id_product           | int       | The product ID. |
| id_product_attribute | int       | The ID of the new default combination (product attribute ID). |
| id_shop              | int\|null | The shop ID when in **single shop context**, otherwise `null`. |

## Example usage

```php
public function hookActionUpdateDefaultCombinationAfter(array $params): void
{
    $productId = (int) ($params['id_product'] ?? 0);
    $productAttributeId = (int) ($params['id_product_attribute'] ?? 0);

    // id_shop can be null when not in a single shop context
    $shopId = $params['id_shop'] ?? null;

    if ($productId <= 0 || $productAttributeId <= 0) {
        return;
    }

    // Your custom code
}
```

## Call of the Hook in the origin file

```php
$this->hookDispatcher->dispatchWithParameters(
    'actionUpdateDefaultCombinationAfter',
    [
        'id_product' => (int) $newDefaultCombination->id_product,
        'id_product_attribute' => (int) $defaultCombinationId->getValue(),
        'id_shop' => $shopConstraint->isSingleShopContext()
            ? $shopConstraint->getShopId()->getValue()
            : null,
    ]
);
```

