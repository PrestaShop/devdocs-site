---
title: "prestashop:htaccess:generate"
url: "https://devdocs.prestashop-project.org/9/development/components/console/prestashop-htaccess-generate/"
version: "9"
description: "Regenerate the .htaccess file from the CLI"
source: "https://github.com/PrestaShop/docs/blob/9.x/development/components/console/prestashop-htaccess-generate.md"
---


# `prestashop:htaccess:generate`

{{< minver v="9.2" title="true" >}}

## Informations

* Path: `src/PrestaShopBundle/Command/GenerateHtaccessCommand.php`
* Options:
  * `--force` (`-f`): Force overwrite even if the file already exists __(optional)__

## Description

This command regenerates the `.htaccess` file directly from the command line, without accessing the Back Office. This provides a faster and more consistent way to regenerate `.htaccess`, for example in deployment workflows.

If the `.htaccess` file already exists, the command warns and stops unless `--force` is passed. With `--force`, the existing file is overwritten.

## Examples

### Generate the .htaccess file

```bash
$ bin/console prestashop:htaccess:generate
```

### Overwrite an existing .htaccess file

```bash
$ bin/console prestashop:htaccess:generate --force
```

