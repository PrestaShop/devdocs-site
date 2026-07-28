---
title: "actionSqlRequestGridPresenterModifier"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionsqlrequestgridpresentermodifier/"
version: "9"
description: "This hook allows to alter presented SQL Manager grid data"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionSqlRequestGridPresenterModifier.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
$this->hookDispatcher->dispatchWithParameters('action' . Container::camelize($definition->getId()) . 'GridPresenterModifier', [
    'presented_grid' => &$presentedGrid,
]);
```

