---
title: "prestashop:update:sql-upgrade-file-hooks-listing"
url: "https://devdocs.prestashop-project.org/8/development/components/console/prestashop-update-sql-upgrade-file-hooks-listing/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/development/components/console/prestashop-update-sql-upgrade-file-hooks-listing.md"
---


# `prestashop:update:sql-upgrade-file-hooks-listing`

## Informations

* Path: `src/PrestaShopBundle/Command/AppendHooksListForSqlUpgradeFileCommand.php`
* Arguments:
  * `ps-version`: PrestaShop version for which the SQL upgrade file will be searched
  * `autoupgrade-path`: Path to the autoupgrade module path which contains the upgrade scripts

## Description

This command aims to add SQL to the SQL upgrade file which contains hook insert operations.

