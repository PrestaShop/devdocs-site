---
title: "actionAdminMetaAfterWriteRobotsFile"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionadminmetaafterwriterobotsfile/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionAdminMetaAfterWriteRobotsFile.md"
---


{{% hookDescriptor %}}

## Parameters details

```php
    <?php
    array(
      'rb_data' => (array) File data,
      'write_fd' => &(resource) File handle
    );
```

## Call of the Hook in the origin file

```php
Hook::exec('actionAdminMetaAfterWriteRobotsFile', [ 'rb_data' => $robots_content, 'write_fd' => &$write_fd, ])
```

