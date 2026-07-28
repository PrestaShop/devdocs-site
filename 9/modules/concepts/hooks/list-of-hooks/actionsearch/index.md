---
title: "actionSearch"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionsearch/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionSearch.md"
---


{{% hookDescriptor %}}

## Parameters details

```php
    <?php
    array(
      'expr' => (string) Search query,
      'total' => (int) Amount of search results
    );
```

## Call of the Hook in the origin file

```php
Hook::exec('actionSearch', [ 'searched_query' => $queryString, 'total' => $count,  // deprecated since 1.7.x 'expr' => $queryString,
```

