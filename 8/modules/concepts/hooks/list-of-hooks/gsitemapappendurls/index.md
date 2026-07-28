---
title: "gSitemapAppendUrls"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/gsitemapappendurls/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/gSitemapAppendUrls.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec(self::HOOK_ADD_URLS, array(
            'lang' => $lang,
        ), null, true)
```

