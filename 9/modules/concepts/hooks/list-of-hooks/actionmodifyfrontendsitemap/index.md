---
title: "actionModifyFrontendSitemap"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actionmodifyfrontendsitemap/"
version: "9"
description: "This hook allows to modify links on sitemap page of your shop. Useful to improve indexation of your modules."
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionModifyFrontendSitemap.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
Hook::exec(
    'actionModifyFrontendSitemap',
    ['urls' => &$sitemapUrls]
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

