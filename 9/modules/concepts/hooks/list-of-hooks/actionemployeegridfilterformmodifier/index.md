---
title: "actionEmployeeGridFilterFormModifier"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionemployeegridfilterformmodifier/"
version: "9"
description: "This hook allows to modify filters for employee grid"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionEmployeeGridFilterFormModifier.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
$this->hookDispatcher->dispatchWithParameters('action' . Container::camelize($definition->getId()) . 'GridFilterFormModifier', [
    'filter_form_builder' => $formBuilder,
]);
```

