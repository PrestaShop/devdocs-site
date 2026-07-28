---
title: "Cache"
url: "https://devdocs.prestashop-project.org/9/development/architecture/cache/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/development/architecture/cache.md"
---


# Cache

## Classes in the root namespace and overrides

The `/var/cache/<ENV>/class_index.php` file contains the link between the class and the declaration file. If there is a caching issue, this file can be safely deleted.

## Smarty

When the store's front-end doesn't quite reflect your changes and emptying the browser's cache is not effective, try emptying the following folders:

- `/var/cache/<ENV>/smarty/cache`
- `/var/cache/<ENV>/smarty/compile`

