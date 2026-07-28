---
title: "LogSeverityChoiceType"
url: "https://devdocs.prestashop-project.org/9/development/components/form/types-reference/log-severity-choice-type/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/development/components/form/types-reference/log-severity-choice-type.md"
---


# LogSeverityChoiceType

ChoiceType of PrestaShopLogger Log levels

- Namespace: PrestaShopBundle\Form\Admin\Type
- Reference: [LogSeverityChoiceType](https://github.com/PrestaShop/PrestaShop/blob/9.1.x/src/PrestaShopBundle/Form/Admin/Type/LogSeverityChoiceType.php)

## Type options

| Option       | Type   | Default value                     | Description                                                                               |
| :----------- | :----- | :-------------------------------- | :---------------------------------------------------------------------------------------- |

## Code example

- [LogsByEmailType](https://github.com/PrestaShop/PrestaShop/blob/9.1.0/src/PrestaShopBundle/Form/Admin/Configure/AdvancedParameters/Logs/LogsByEmailType.php#L25-L39)

```php
$builder->add('logs_by_email', LogSeverityChoiceType::class, [
    'placeholder' => $this->trans(
        'None',
        'Admin.Global'
    ),
    'label' => $this->trans(
        'Minimum severity level',
        'Admin.Advparameters.Feature'
    ),
    'help' => $this->trans(
        'Click on "None" to disable log alerts by email or enter the recipients of these emails in the following field.',
        'Admin.Advparameters.Help'
    ),
])
```

## Preview example

{{< figure src="../img/log-severity-choice-type.png" title="LogSeverityChoiceType rendered in form example" >}}

