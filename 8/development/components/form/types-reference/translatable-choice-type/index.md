---
title: "TranslatableChoiceType"
url: "https://devdocs.prestashop-project.org/8/development/components/form/types-reference/translatable-choice-type/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/development/components/form/types-reference/translatable-choice-type.md"
---


# TranslatableChoiceType

Class TranslatableChoiceType adds translatable choice types with custom inner type to forms. Language selection uses a dropdown.

- Namespace: PrestaShopBundle\Form\Admin\Type
- Reference: [TranslatableChoiceType](https://github.com/PrestaShop/PrestaShop/blob/8.0.x/src/PrestaShopBundle/Form/Admin/Type/TranslatableChoiceType.php)

## Type options

| Option       | Type   | Default value                     | Description                                                                               |
| :----------- | :----- | :-------------------------------- | :---------------------------------------------------------------------------------------- |

## Code example

- [OrderStateType](https://github.com/PrestaShop/PrestaShop/blob/8.0.x/src/PrestaShopBundle/Form/Admin/Configure/ShopParameters/OrderStates/OrderStateType.php#L198-L207)

```php
$builder->add('template', TranslatableChoiceType::class, [
    'hint' => sprintf(
        '%s<br>%s',
        $this->trans('Only letters, numbers and underscores ("_") are allowed.', 'Admin.Shopparameters.Help'),
        $this->trans('Email template for both .html and .txt.', 'Admin.Shopparameters.Help')
    ),
    'required' => false,
    'choices' => $this->templates,
    'row_attr' => $this->templateAttributes,
])
```

