---
title: "actionWishlistAddProduct"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionwishlistaddproduct/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionWishlistAddProduct.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('actionWishlistAddProduct', [
            'idWishlist' => $idWishList,
            'customerId' => $this->context->customer->id,
            'idProduct' => $id_product,
            'idProductAttribute' => $id_product_attribute,
        ])
```

