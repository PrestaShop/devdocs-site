---
title: "TranslateType"
url: "https://devdocs.prestashop-project.org/8/development/components/form/types-reference/translate-type/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/development/components/form/types-reference/translate-type.md"
---


# TranslateType

This form class is responsible for creating a translatable form. Language selection uses tabs.

- Namespace: PrestaShopBundle\Form\Admin\Type
- Reference: [TranslateType](https://github.com/PrestaShop/PrestaShop/blob/8.0.x/src/PrestaShopBundle/Form/Admin/Type/TranslateType.php)

## Type options

| Option       | Type   | Default value                     | Description                                                                               |
| :----------- | :----- | :-------------------------------- | :---------------------------------------------------------------------------------------- |

## Code example

- [ProductFeature](https://github.com/PrestaShop/PrestaShop/blob/8.0.x/src/PrestaShopBundle/Form/Admin/Feature/ProductFeature.php#L98-L105)

```php
$builder->add('custom_value', TranslateType::class, [
    'type' => FormType\TextType::class,
    'options' => [],
    'locales' => $this->locales,
    'hideTabs' => true,
    'required' => false,
    'label' => $this->translator->trans('OR Customized value', [], 'Admin.Catalog.Feature'),
]);
```
