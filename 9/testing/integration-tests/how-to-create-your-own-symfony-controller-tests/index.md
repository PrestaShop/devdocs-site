---
title: "How to create your own symfony controller tests"
url: "https://devdocs.prestashop-project.org/9/testing/integration-tests/how-to-create-your-own-symfony-controller-tests/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/testing/integration-tests/how-to-create-your-own-symfony-controller-tests.md"
---


# How to create your own symfony controller tests or add tests to PrestaShop

If you create your own Modern (symfony) controllers or if you plan on migrating a legacy controller, you can create
tests to cover parts of HTTP layer aka symfony functional tests.

## Creating a functional test

To create a functional test, we encourage you to base your test class on our own implementation of `WebTestCase`.

For instance:

```php
<?php
namespace Tests\Functional\Foo;

use Tests\Integration\PrestaShopBundle\Test\WebTestCase;

class BarTest extends WebTestCase
{
    public function testSomeAction()
    {
        $url = this->router->generate('route_name');
        $this->client->request('GET', $url);
        
        $response = $this->client->getResponse();
        
        self::assertTrue($response->isSuccessful());
    }
}
```

Find out more in [Symfony's documentation on functional testing](https://symfony.com/doc/3.4/testing.html#functional-tests). 


