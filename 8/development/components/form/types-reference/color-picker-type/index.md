---
title: "ColorPickerType"
url: "https://devdocs.prestashop-project.org/8/development/components/form/types-reference/color-picker-type/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/development/components/form/types-reference/color-picker-type.md"
---


# ColorPickerType

This form class is responsible for creating a color picker field

- Namespace: PrestaShopBundle\Form\Admin\Type
- Reference: [ColorPickerType](https://github.com/PrestaShop/PrestaShop/blob/8.0.x/src/PrestaShopBundle/Form/Admin/Type/ColorPickerType.php)

## Type options

| Option       | Type   | Default value                     | Description                                                                               |
| :----------- | :----- | :-------------------------------- | :---------------------------------------------------------------------------------------- |

## Code example

- [OrderStateType.php](https://github.com/PrestaShop/PrestaShop/blob/8.0.x/src/PrestaShopBundle/Form/Admin/Configure/ShopParameters/OrderStates/OrderStateType.php#L132-L134)

```php
$builder->add('color', ColorPickerType::class, [
    'required' => true,
])
```

## Preview example

{{< figure src="../img/color-picker-type.png" title="ColorPickerType rendered in form example" >}}

