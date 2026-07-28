---
title: "MoneyWithSuffixType"
url: "https://devdocs.prestashop-project.org/8/development/components/form/types-reference/money-with-suffix/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/development/components/form/types-reference/money-with-suffix.md"
---


# MoneyWithSuffixType

The `MoneyWithSuffixType` represents input with currency suffix.

## Type options

| Option   | Type   | Default      | Description       |
| -------- | ------ | ------------ | ----------------- |
| currency | string | `EUR`        | Currency ISO code |
| suffix   | string | Empty string | Suffix text       |

## Required Javascript components
    
None.

## Code example

Add `MoneyWithSuffixType` to your form.

```php
<?php

use Symfony\Component\Form\AbstractType;
use PrestaShopBundle\Form\Admin\Type\MoneyWithSuffixType;

class SomeType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('price', MoneyWithSuffixType::class, [
                'currency' => 'EUR',
                'suffix' => '(tax excl.)',
            ])
        ;
    }
}
```

## Preview example

{{< figure src="../img/money_with_suffix.png" title="MoneyWithSuffixType rendered in form" >}}

