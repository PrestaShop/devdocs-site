---
title: "actionTaxRulesGroupGridPresenterModifier"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actiontaxrulesgroupgridpresentermodifier/"
version: "9"
description: "This hook allows to modify data which is about to be used in template for tax rules group grid"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionTaxRulesGroupGridPresenterModifier.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
$this->hookDispatcher->dispatchWithParameters('action' . Container::camelize($definition->getId()) . 'GridPresenterModifier', [
    'presented_grid' => &$presentedGrid,
]);
```

