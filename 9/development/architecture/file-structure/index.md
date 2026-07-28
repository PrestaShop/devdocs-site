---
title: "File structure"
url: "https://devdocs.prestashop-project.org/9/development/architecture/file-structure/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/development/architecture/file-structure/_index.md"
---


# File structure

Here's the typical directory structure of a PrestaShop install:

```
.
├── admin
├── admin-api
├── app
├── bin
├── cache
├── classes
├── config
├── controllers
├── docs
├── download
├── img
├── install
├── js
├── localization
├── mails
├── modules
├── override
├── pdf
├── src
├── tests
├── themes
├── tools
├── translations
├── upload
├── var
├── vendor
└── webservice
```

## Folder reference

### /admin

The **admin** directory contains the main endpoint to access the Back Office. When accessing this folder with your browser, you will be asked your employee credentials.
                        
{{% notice tip %}}
For an added security layer, consider protecting this folder with a `.htaccess` or `.htpasswd` file.
{{% /notice %}} 

This directory is named `admin-dev` when using PrestaShop from source code, and is renamed automatically when you install it from a ZIP package.

It contains the following subdirectories:

- `/autoupgrade`: scratch directory for the update assistant module
- `/backups`: contains database backups generated from the Back office
- `/export`: contains data export files
- `/filemanager`: sources for the Back office file manager 
- `/import`: contains data import files
- `/themes`: contains the templates for two back office themes, `default` and `new-theme`.

### /admin-api

Empty folder use for the Admin API route. To learn more about this feature, read the [Admin API section]({{< ref "/9/admin-api/" >}}). 

### /app

This directory contains the configuration for the bundles and the framework.

It contains the following subdirectories:

- `/config`: configuration files for database, parameters, services, etc.
- `/logs`: execution logs
- `/Resources`: different resources for the software.
- `/test`: reserved

This directory also includes the `AppKernel.php` file, which configures the Symfony application.

### /bin

Contains executable binaries installed by the framework, such as the Symfony console.

### /cache

Contains temporary cache files. No longer used by PrestaShop but kept for backwards compatibility.

### /classes
 
Contains all the legacy classes, including:
 
- Object models 
- Utility classes (like `Db`, `Helper`, `Tools`...)
- Base controllers (like `FrontController`, `AdminController`...)

### /config

Contains bootstrapping and configuration files. Unless asked, you should *never* edit them, as they are directly handled by PrestaShop's installer and back office.

### /controllers

Contains controllers – as in Model-View-Controller (or MVC), the software architecture used by PrestaShop. Each file controls a specific part of PrestaShop.

Controllers are separated in two directories:

- `/admin`: contains legacy controllers for the Back Office
- `/front`:  contains controllers for the Front Office

### /docs

Contains documentation files, licenses, sample import files, and more. 

{{% notice tip %}}
You should delete this directory in a production environment.
{{% /notice %}}

### /download

Contains your virtual products, which can be downloaded by the customers who bought them. Files are stored with an md5 filename.

### /img

Contains all of PrestaShop's default images, icons and picture files – that is, those that do not belong to the theme. 

It contains the following subdirectories:

- `/admin`: Back office images 
- `/c`: Category pictures
- `/cms`: CMS pictures
- `/co`: Attributes (colors) pictures
- `/flags`: Country & language flags
- `/genders`: Gender (_Shop Parameters > Customers > Client titles_) pictures
- `/jquery-ui`: jQuery UI images
- `/l`: Language pictures
- `/m`: Manufacturer pictures
- `/os`: Order state pictures
- `/p`: Product pictures
- `/s`: Carrier pictures
- `/scenes`: Category scene pictures (removed since 1.6)
- `/st`: Stores (_Shop Parameters > Contact > Stores_) pictures
- `/su`: Supplier pictures
- `/t`: Tab icons
- `/tmp`: Temporary pictures

### /install

Contains all the files related to PrestaShop's installer. This directory is named `install-dev` when using PrestaShop from source code.

{{% notice note %}}
For security reasons, you will be required to delete this directory after installation.
{{% /notice %}}

### /js

Contains JavaScript files that are not attached to themes. Most of them belong to the back office. 

This is also where you will find the jQuery framework.

### /localization

Contains all of PrestaShop's localization packs — that is, files that contain local information such as default currencies and languages, tax rules and tax rule groups, states and measurement units in use in each country.

The [CLDR database](http://cldr.unicode.org/) is also located in this directory.

### /mails

Contains all HTML and text templates for e-mails sent by PrestaShop. Each language has its specific folder, where you can manually edit their content if you wish. PrestaShop contains a tool to edit your e-mails, located in the back office, in the Localization &gt; Translation page.

This directory also contains [Mail themes]({{< ref "/9/development/components/mail-templates/" >}}).

### /modules

Contains all of PrestaShop's modules, each in its own folder. 

{{% notice tip %}}
If you wish to definitely remove a module, it is better to uninstall it from the back office.
{{% /notice %}}

### /override

Contains class overrides. To learn more about this feature, read the [Overrides section]({{< ref "/9/modules/concepts/overrides" >}}). 

{{% notice warning %}}
**Note:** overrides are not recommended for modules that you intend to distribute/sell, and are strictly forbidden in partner modules. Keep them for your own shop.
{{% /notice %}}

### /pdf

Contains all the template files (`.tpl`) related to PDF file generation (invoice, delivery slips, etc.). Change these files in order to change the look of the PDF files that PrestaShop generates.

### /src

Contains the new architecture files (**Core**, **Adapter** and **PrestaShop Bundle**). To learn more, see [Understanding the "src" folder]({{< relref "understanding-src-folder" >}}). 

### /tests

Contains automated tests. This directory is not included in release packages.

Tests are split in three big families:

- `Integration`: contains behavior and integration tests.
- `UI`: contains end-to-end tests.
- `Unit`: contains unit tests.

### /themes

Contains all the currently installed themes, each in its own folder.

It also includes the `core.js` library.

### /tools

Contains development tools. This directory is not included in release packages.

It contains the following subdirectories:

- `/assets`: Script that allow building all static assets from sources.
- `/build`: Used to create release packages.
- `/foreignkeyGenerator`: Creates foreign keys for all tables (for educational purposes only)
- `/profiling`: Profiling tools for legacy classes

### /translations

Contains translation resources for all the installed languages, including zip packages for any translation packs you have downloaded.

### /upload

Contains the files that would be uploaded by clients for customizable products (for instance, a picture that a client wants to have printed on a mug).

### /var

Contains various files needed by PrestaShop for its internal operation, including cache files, log files, sessions files ...

### /vendor

Contains various 3rd-party libraries required by PrestaShop through Composer, such as Symfony, Doctrine, API Platform core, etc.

### /webservice

Contains the main endpoint for the [Webservice API]({{< ref "/9/webservice/" >}}).

