---
title: "action\u003cFormName\u003eFormDataProviderData"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionformnameformdataproviderdata/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/action\u003cFormName\u003eFormDataProviderData.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
$this->hookDispatcher->dispatchWithParameters(
    'action' . $this->camelize($this->getFormName()) . 'FormDataProviderData',
    [
        'data' => &$data,
        'id' => $id,
        'options' => &$options,
    ]
);
```

## Example implementation

This hook has been implemented as an example in our [example-modules repository](https://github.com/PrestaShop/example-modules/tree/master/demoformdataproviders).

