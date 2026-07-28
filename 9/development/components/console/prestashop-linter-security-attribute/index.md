---
title: "prestashop:linter:security-attribute"
url: "https://devdocs.prestashop-project.org/9/development/components/console/prestashop-linter-security-attribute/"
version: "9"
description: "Check security attribute annotations"
source: "https://github.com/PrestaShop/docs/blob/9.x/development/components/console/prestashop-linter-security-attribute.md"
---


# `prestashop:linter:security-attribute`

## Informations

* Path: `src/PrestaShopBundle/Command/SecurityAttributeLinterCommand.php`
* Arguments:
  * `action`: Action to perform, must be one of: `list` and `find-missing`

## Description

This command aims to check if Back Office controller routes have configured Security attributes.

Two options are available: Listing and Finding Missing.

### Listing
This option aims to list all routes, and their related permissions.

### Finding missing
This option aims to find routes with missing security attributes.

