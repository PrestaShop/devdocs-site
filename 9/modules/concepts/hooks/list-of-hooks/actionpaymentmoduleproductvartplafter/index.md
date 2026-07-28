---
title: "actionPaymentModuleProductVarTplAfter"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionpaymentmoduleproductvartplafter/"
version: "9"
description: "Allows to modify product data in e-mail template."
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionPaymentModuleProductVarTplAfter.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionPaymentModuleProductVarTplAfter', [
                    'product_var_tpl' => &$product_var_tpl,
                    'product' => $product,
                    'order' => $order,
                    'context' => $this->context,
                ]);
```

