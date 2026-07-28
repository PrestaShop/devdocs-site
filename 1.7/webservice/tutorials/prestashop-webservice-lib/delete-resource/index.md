---
title: "Delete a resource"
url: "https://devdocs.prestashop-project.org/1.7/webservice/tutorials/prestashop-webservice-lib/delete-resource/"
version: "1.7"
source: "https://github.com/PrestaShop/docs/blob/1.7.x/webservice/tutorials/prestashop-webservice-lib/delete-resource.md"
---


# Delete a resource

To delete a resource you only need its ID, then you can use the `delete()` method.

| Key          | Value               |
|--------------|---------------------|
| **resource** | customers           |
| **id**       | *resource_id* (int) |

## Using PrestaShopWebservice::delete

```php
<?php
try {
    $webService = new PrestaShopWebservice('http://example.com/', 'ZR92FNY5UFRERNI3O9Z5QDHWKTP3YIIT', false);

    $id = 2;
    $webService->delete([
        'resource' => 'customers',
        'id' => $id, // Here we use hard coded value but of course you could get this ID from a request parameter or anywhere else
    ]);
    echo 'Customer with ID ' . $id . ' was successfully deleted' . PHP_EOL;
} catch (PrestaShopWebserviceException $e) {
    echo 'Error:' . $e->getMessage();
}
```

