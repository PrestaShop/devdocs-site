---
title: "Cleaning up"
url: "https://devdocs.prestashop-project.org/8/development/architecture/migration-guide/clean-up/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/development/architecture/migration-guide/clean-up.md"
---


# Cleaning up

Once everything is migrated, refactored, extracted to specific classes and working like a charm, it's time to remove the old, migrated parts:

* Delete the old controller.
* Delete the old templates (delete the `admin-dev/themes/default/template/controller/{name}` folder.
* Delete the related "legacy tests".

