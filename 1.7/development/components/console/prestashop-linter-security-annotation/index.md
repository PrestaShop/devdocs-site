---
title: "prestashop:linter:security-annotation"
url: "https://devdocs.prestashop-project.org/1.7/development/components/console/prestashop-linter-security-annotation/"
version: "1.7"
source: "https://github.com/PrestaShop/docs/blob/1.7.x/development/components/console/prestashop-linter-security-annotation.md"
---


# `prestashop:linter:security-annotation`

## Informations

* Path: `src/PrestaShopBundle/Command/SecurityAnnotationLinterCommand.php`
* Arguments:
  * `action`: Action to perform, must be one of: `list` and `find-missing`

## Description

This command aims to check if Back Office controller routes have configured Security annotations.

Two options are available: Listing and Finding Missing.

### Listing
This option aims to list all routes, and their related permissions.

### Finding missing
This option aims to find routes with missing security annotations.    


