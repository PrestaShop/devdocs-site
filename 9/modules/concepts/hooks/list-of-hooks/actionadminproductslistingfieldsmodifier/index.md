---
title: "actionAdminProductsListingFieldsModifier"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionadminproductslistingfieldsmodifier/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionAdminProductsListingFieldsModifier.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec('action' . $this->controller_name . 'ListingFieldsModifier', [
    'select' => &$this->_select,
    'join' => &$this->_join,
    'where' => &$this->_where,
    'group_by' => &$this->_group,
    'order_by' => &$this->_orderBy,
    'order_way' => &$this->_orderWay,
    'fields' => &$this->fields_list,
]);
```

