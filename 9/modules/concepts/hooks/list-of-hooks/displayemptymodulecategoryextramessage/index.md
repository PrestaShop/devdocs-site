---
title: "displayEmptyModuleCategoryExtraMessage"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/displayemptymodulecategoryextramessage/"
version: "9"
description: "This hook allows to add an extra message to display in the Module manager page when a category doesn't have any module"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/displayEmptyModuleCategoryExtraMessage.md"
---


{{% hookDescriptor %}}

## Parameters details

```html.twig
    {
        'category_name': (string) categoryName
    }
```

## Call of the Hook in the origin file

```twig
{{ renderhook('displayEmptyModuleCategoryExtraMessage', {'category_name': category.name}) }}
```

