---
title: "prestashop:module"
url: "https://devdocs.prestashop-project.org/8/development/components/console/prestashop-module/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/development/components/console/prestashop-module.md"
---


# `prestashop:module`

## Informations

* Path: `src/PrestaShopBundle/Command/ModuleCommand.php`
* Arguments:
  * `action`: Action to execute, must be one of: install, uninstall, enable, disable, enableMobile, disableMobile, reset, upgrade, configure
  * `module name`: Module on which the action will be executed
  * `file path`: YML file path for configuration __(optional)__

## Description

This command aims to manage your modules via command line.


