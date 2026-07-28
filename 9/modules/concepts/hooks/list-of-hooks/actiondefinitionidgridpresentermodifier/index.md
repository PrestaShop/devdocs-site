---
title: "action\u003cDefinitionId\u003eGridPresenterModifier"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actiondefinitionidgridpresentermodifier/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/action\u003cDefinitionId\u003eGridPresenterModifier.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
dispatchWithParameters('action' . Container::camelize($definition->getId()) . 'GridPresenterModifier', [
            'presented_grid' => &$presentedGrid,
        ])
```

