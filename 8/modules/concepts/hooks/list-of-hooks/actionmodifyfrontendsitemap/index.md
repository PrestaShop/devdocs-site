---
title: "actionModifyFrontendSitemap"
url: "https://devdocs.prestashop-project.org/8/modules/concepts/hooks/list-of-hooks/actionmodifyfrontendsitemap/"
version: "8"
description: "For example landing pages, blog posts and others."
source: "https://github.com/PrestaShop/docs/blob/8.x/modules/concepts/hooks/list-of-hooks/actionModifyFrontendSitemap.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec(
    'actionModifyFrontendSitemap',
    ['urls' => &$sitemapUrls],
    null,
    false,
    true,
    false,
    null,
    true
);
```

## Example implementation

```php
public function hookActionModifyFrontendSitemap($params)
{
    $customUrls = [
        [
            'id' => 'custom-url-1',
            'label' => 'Custom URL',
            'url' => 'https://prestashop-project.org',
        ]
    ];

    $params['urls']['pages']['links'] = array_merge($params['urls']['pages']['links'], $customUrls); // add custom urls to pages group
    unset($params['urls']['categories']); // hide categories
}
```


