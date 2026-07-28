---
title: "EmailType"
url: "https://devdocs.prestashop-project.org/8/development/components/form/types-reference/email-type/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/development/components/form/types-reference/email-type.md"
---


# EmailType

Symfony native EmailType extended with IDNConverter (InternationalizedDomainNameConverter) feature

- Namespace: PrestaShopBundle\Form\Admin\Type
- Reference: [EmailType](https://github.com/PrestaShop/PrestaShop/blob/8.0.x/src/PrestaShopBundle/Form/Admin/Type/EmailType.php)

## Type options

| Option       | Type   | Default value                     | Description                                                                               |
| :----------- | :----- | :-------------------------------- | :---------------------------------------------------------------------------------------- |

## Code example

- [EmployeeType](https://github.com/PrestaShop/PrestaShop/blob/8.0.x/src/PrestaShopBundle/Form/Admin/Configure/AdvancedParameters/Employee/EmployeeType.php#L136-L144)

```php
$builder->add('email', EmailType::class, [
    'constraints' => [
        $this->getNotBlankConstraint(),
        $this->getLengthConstraint(EmployeeEmail::MAX_LENGTH),
        new Email([
            'message' => $this->trans('This field is invalid', [], 'Admin.Notifications.Error'),
        ]),
    ],
])
```

## Preview example

{{< figure src="../img/email-type.png" title="EmailType rendered in form example" >}}

