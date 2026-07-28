---
title: "DateRangeType"
url: "https://devdocs.prestashop-project.org/8/development/components/form/types-reference/date-range/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/development/components/form/types-reference/date-range.md"
---


# DateRangeType

DateRangeType combines two [DatePickers](../date-picker) to create date range picker. It uses Javascript,
but doesn't require any specific components, as it's already enabled globally.

## Custom options

None.

## Required Javascript components

None.

## Code example

```php
<?php
// path/to/your/CustomType.php

use PrestaShopBundle\Form\Admin\Type\DateRangeType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;

class CustomType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        // this will render a date range picker with 2 DatePickerTypes
        // named 'date_add_from' and 'date_add_to'
        $builder->add('date_add', DateRangeType::class);
    }
}
```

## Preview example

{{< figure src="../img/date-range.png" title="DateRangeType rendered in form example" >}}

