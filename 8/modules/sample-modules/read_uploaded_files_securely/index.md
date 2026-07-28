---
title: "Reading uploaded files securely"
url: "https://devdocs.prestashop-project.org/8/modules/sample-modules/read_uploaded_files_securely/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/sample-modules/read_uploaded_files_securely.md"
---


# Reading uploaded files securely

## Introduction

At some point, you might need to display in the back office a file that was uploaded from the front office. This poses security risks, as those files might contain malicious scripts that could be executed when served directly by Apache without the proper content-type.
A related vulnerability was found on the migrated customer-thread page in the back office, where an administrator can read messages and files sent from the front office.

The patch introduced in version 8.1.6 includes a new route and related controller, allowing files uploaded by untrusted actors (such as front office users) to be securely read. The good news is that you can also use this route to secure file reading in the back office.

{{% notice info %}}
PrestaShop 8.1.6 introduced a BC break: files uploaded into the `upload` folder can't be served directly by apache anymore, you will need to use the `admin_common_secured_file_image_reader` route as specified below or implement your own file reading mechanism.
{{% /notice %}}

## How to use

In your template, instead of directly calling the file, ex: an image:

```html
<a href="{{ message.attachmentFile }}" target="_blank">
```

You can now use the available route for securely reading files that are not to be trusted:

```html
<a href="{{ path('admin_common_secured_file_image_reader', { 'fileName': message.attachmentFile }) }}" target="_blank">
```

## How does it work

The `admin_common_secured_file_image_reader` route is linked to a controller called `SecuredFileReaderController`. If a file is supposed to be an image, this controller will return it with the proper content-type HTTP header, ensuring that the browser does not execute any script it might contain.

For other types of documents, such as PDFs, Word documents, ZIP files, etc., the file will be downloaded as an attachment, preventing it from being opened in the back office context.

This controller, `SecuredFileReaderController`, is defined as a service in `src/PrestaShopBundle/Resources/config/services/bundle/controller.yml`. This means it can be decorated, allowing you to manage file types whose extensions are not listed in the controller.

