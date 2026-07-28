---
title: "GeoCoordinatesType"
url: "https://devdocs.prestashop-project.org/9/development/components/form/types-reference/geo-coordinates/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/development/components/form/types-reference/geo-coordinates.md"
---


# GeoCoordinatesType

This form class is responsible to create a geolocation latitude/longitude coordinates field.

## Type options

| Option                 | Type | Default value | Description                                                                                                            |
|:-----------------------|:-----|:--------------|:-----------------------------------------------------------------------------------------------------------------------|
| label_longitude | string  | Longitude            | Longitude label                                                                                  |
| label_latitude | string  | Latitude            | Latitude label                                                                                  |

## Required Javascript components

None.

## Code example

Add `GeoCoordinatesType` to your form.

```php
<?php
// path/to/your/CustomType.php

use PrestaShopBundle\Form\Admin\Type\GeoCoordinatesType;

class CustomType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('coordinates', GeoCoordinatesType::class)
        ;
    }
}
```

Find a complete implementation in the [demosymfonyform module](https://github.com/PrestaShop/example-modules/blob/master/demosymfonyform/src/Controller/DemoGeoCoordinatesFormController.php).

## Updating the coordinates

The `GeoCoordinatesType` renders two input fields that must be provided when updating the value:

- **latitude** - the north-south position
- **longitude** - the east-west position

## Preview example

{{< figure src="../img/geo_coordinates.png" title="GeoCoordinatesType rendered in form example" >}}

