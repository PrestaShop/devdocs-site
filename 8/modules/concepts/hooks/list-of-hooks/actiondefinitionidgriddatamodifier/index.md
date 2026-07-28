---
title: "action\u003cDefinitionId\u003eGridDataModifier"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actiondefinitionidgriddatamodifier/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/action\u003cDefinitionId\u003eGridDataModifier.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
$this->hookDispatcher->dispatchWithParameters('action' . Container::camelize($definition->getId()) . 'GridDataModifier', [
    'data' => &$data,
]);
```

