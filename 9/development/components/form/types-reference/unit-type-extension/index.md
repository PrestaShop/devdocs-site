---
title: "UnitTypeExtension"
url: "https://devdocs.prestashop-project.org/9/development/components/form/types-reference/unit-type-extension/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/development/components/form/types-reference/unit-type-extension.md"
---


# UnitTypeExtension

The `UnitTypeExtension` used with `NumberType` or `IntegerType` represents a number input with unit value (e.g. Kg, Cm & etc.).

## Type options

| Option | Type   | Default | Description                      |
| ------ | ------ | ------- | -------------------------------- |
| unit   | string | `unit`  | Type of unit (e.g. Kg, Cm & etc) |

## Required Javascript components

None.

## Code example

Add `NumberType` or `IntegerType` to your form and optionally you can configure `unit` for it.

```php
<?php

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;

class SomeType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('weight', NumberType::class, [
                'unit' => 'kg',
                'required' => false,
                'empty_data' => '0',
            ])
        ;
    }
}
```

## Preview example

{{< figure src="../img/unit-type-extention.png" title="UnitTypeExtension rendered in form" >}}

