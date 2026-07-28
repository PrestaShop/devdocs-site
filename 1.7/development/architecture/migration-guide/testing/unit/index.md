---
title: "Unit testing"
url: "https://devdocs.prestashop-project.org/1.7/development/architecture/migration-guide/testing/unit/"
version: "1.7"
source: "https://github.com/PrestaShop/docs/blob/1.7.x/development/architecture/migration-guide/testing/unit.md"
---

# Unit testing

## Smoke testing

A smoke test is a really simple and basic test that ensure the page will load with 
the right HTTP code. This won't ensure the page will works as expected **but** if the test fails, this ensure the page is not functional.

To add a new test, you need to add a new entry in the Data Provider of SurvivalTest class:

```php
<?php

namespace LegacyTests\Integration\PrestaShopBundle\Controller\Admin;
// ...
/**
 * @group demo
 *
 * To execute these tests: use "./vendor/bin/phpunit -c tests-legacy/phpunit-admin.xml --filter=SurvivalTest" command.
 */
class SurvivalTest extends WebTestCase
{
    // [...]

    public function getDataProvider()
    {
        return [
            'symfony_route_of_page' => ['Page title', 'symfony_route_of_page'],
            // ...
        ];
    }
}
```

