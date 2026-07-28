---
title: "ProfileChoiceType"
url: "https://devdocs.prestashop-project.org/8/development/components/form/types-reference/profile-choice-type/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/development/components/form/types-reference/profile-choice-type.md"
---


# ProfileChoiceType

Class ProfileChoiceType is choice type for selecting employee's profile.

- Namespace: PrestaShopBundle\Form\Admin\Type\Common\Team
- Reference: [ProfileChoiceType](https://github.com/PrestaShop/PrestaShop/blob/8.0.x/src/PrestaShopBundle/Form/Admin/Type/Common/Team/ProfileChoiceType.php)

## Type options

| Option       | Type   | Default value                     | Description                                                                               |
| :----------- | :----- | :-------------------------------- | :---------------------------------------------------------------------------------------- |

## Code example

- [EmployeeGridDefinitionFactory](https://github.com/PrestaShop/PrestaShop/blob/8.0.x/src/Core/Grid/Definition/Factory/EmployeeGridDefinitionFactory.php#L203-L209)

```php
->add(
    (new Filter('profile', ProfileChoiceType::class))
        ->setTypeOptions([
            'required' => false,
        ])
        ->setAssociatedColumn('profile')
)
```

## Preview example

{{< figure src="../img/profile-choice-type.png" title="ProfileChoiceType rendered in form example" >}}

