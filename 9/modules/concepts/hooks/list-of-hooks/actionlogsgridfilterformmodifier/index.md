---
title: "actionLogsGridFilterFormModifier"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionlogsgridfilterformmodifier/"
version: "9"
description: "This hook allows to alter filters form used in Logs"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionLogsGridFilterFormModifier.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
$this->hookDispatcher->dispatchWithParameters('action' . Container::camelize($definition->getId()) . 'GridFilterFormModifier', [
    'filter_form_builder' => $formBuilder,
]);
```

