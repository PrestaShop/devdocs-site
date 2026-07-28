---
title: "CountryChoiceType"
url: "https://devdocs.prestashop-project.org/1.7/development/components/form/types-reference/country-choice/"
version: "1.7"
source: "https://github.com/PrestaShop/docs/blob/1.7.x/development/components/form/types-reference/country-choice.md"
---


# CountryChoiceType

CountryChoiceType is a child of
[ChoiceType](https://symfony.com/doc/current/reference/forms/types/choice.html).
It is used to display countries selection box and by default comes with
a list of countries from PrestaShop database.

## Type options

| Option  | Type  | Default value                    | Description                                                                                         |    |
|:--------|:------|:---------------------------------|:----------------------------------------------------------------------------------------------------|:---|
| choices | array | Array of all available countries | Choice list that is passed to parent 'choices'. Array should be formatted in `name => value` pairs. |    |

## Required Javascript components

None.

## Code example

```php
<?php
// path/to/your/CustomType.php

use PrestaShopBundle\Form\Admin\Type\CountryChoiceType;
use Symfony\Component\Form\AbstractType;

class CustomType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {        
        $builder->add('country', CountryChoiceType::class);
    }
}
```

## Preview example

{{< figure src="../img/country_choice.png" title="CountryChoiceType rendered in form example" >}}

