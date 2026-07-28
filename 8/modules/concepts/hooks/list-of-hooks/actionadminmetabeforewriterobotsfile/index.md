---
title: "actionAdminMetaBeforeWriteRobotsFile"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionadminmetabeforewriterobotsfile/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionAdminMetaBeforeWriteRobotsFile.md"
---


{{% hookDescriptor %}}

## Parameters details

```php
    <?php
    array(
      'rb_data' => &(array) File data
    );
```

## Call of the Hook in the origin file

```php
Hook::exec('actionAdminMetaBeforeWriteRobotsFile', [
                'rb_data' => &$robots_content,
            ])
```

