---
title: "actionCmsPageGridDataModifier"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actioncmspagegriddatamodifier/"
version: "9"
description: "This hook allows to modify cms page grid data"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionCmsPageGridDataModifier.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
$this->hookDispatcher->dispatchWithParameters('action' . Container::camelize($definition->getId()) . 'GridDataModifier', [
    'data' => &$data,
]);
```

