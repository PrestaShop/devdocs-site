---
title: "prestashop:mail:generate"
url: "https://devdocs.prestashop-project.org/1.7/development/components/console/prestashop-mail-generate/"
version: "1.7"
source: "https://github.com/PrestaShop/docs/blob/1.7.x/development/components/console/prestashop-mail-generate.md"
---


# `prestashop:mail:generate`

## Informations

* Path: `src/PrestaShopBundle/Command/GenerateMailTemplatesCommand.php`
* Arguments:
  * `theme`: Theme to use for mail templates
  * `locale`: Locale to use for the templates
  * `coreOutputFolder`: Output folder to export core templates (__(optional)__)
  * `modulesOutputFolder`: Output folder to export modules templates (by default same as core) (__(optional)__)
* Options:
  * `--overwrite`, `-o`: Overwrite existing templates (false, by default)

## Description

This command aims to generate mail templates for a specified theme.


