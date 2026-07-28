---
title: "CQRS - Commands and Queries"
url: "https://devdocs.prestashop-project.org/9/development/architecture/domain/cqrs/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/development/architecture/domain/cqrs.md"
---


# CQRS - Commands and Queries

## What is CQRS?

CQRS stands for _Command Query Responsibility Segregation_. In brief, the CQRS pattern suggests to separate "write" and "read" models, which it refers to as Commands and Queries. In a web application like a CMS, we perform either "read" operations which return information to the user or "write" operations which modify the data managed by the application.

## Why using CQRS in PrestaShop?

During Back Office migration to Symfony, PrestaShop needs a way to access and alter data on the new Symfony pages without multiplying the sources of truth, and without accessing `ObjectModel` (e.g. `Product`, `Category`) directly.

Commands and Queries allow us to isolate the controllers from the data source, which can be later replaced by something else while leaving behind a nice API.

This implementation proposes a "top-down" design, which inverses the classic data-driven design. It starts on a page and the actions performed in it, and then trickles down layer by layer, finishing on the data layer.

## Difference between legacy & new architectures

In legacy architecture, controller is calling `ObjectModel` directly, without providing clear API or separation between read and write model, thus highly coupling data layer with controller. See legacy architecture's schema below.

{{< figure src="../img/legacy_architecture.png" title="Legacy architecture" >}}

Fortunately, by implementing CQRS it allows PrestaShop to quickly build new API, but still use legacy `ObjectModel` by implementing `Adapter` handlers. This approach enables us to drop `ObjectModel` and replace it with something else later without breaking new API (Commands & Queries). See new architecture's schema below:

{{< figure src="../img/new_architecture.png" title="New architecture using CQRS" >}}

## CQRS Principles in PrestaShop

1. All input validation SHOULD be done during the object construction (see [Validation]({{< relref "/9/development/architecture/migration-guide/validation">}})).
2. All objects SHOULD be immutable unless it's impractical to do so.
3. The `Core\Domain` namespace _describes_ business objects, actions and messages. It DOES NOT contain behavior (at least for now).

### Command and CommandHandler principles

1. Any alteration on the state of the application MUST be performed through a `Command`.
2. A `Command` describes a __single__ action. It DOES NOT perform it.
3. A `Command` receives only primitive types on input (int, float, string, bool and array).
4. For every `Command` there MUST be at least one `CommandHandler` whose role is to execute that `Command`.
5. A `CommandHandler` acts as a port to a Core, therefore it SHOULD NOT handle the domain logic itself, but orchestrate the necessary [services]({{< relref "./domain-services" >}}) instead.
6. A `CommandHandler` MUST be placed in the `Adapter` namespace as long as it has legacy dependencies.
7. A `CommandHandler` SHOULD NOT return anything on success, and SHOULD throw a typed `Exception` on failure. The "no return on success" rule can be broken only when creating entities.
8. A `CommandHandler` MUST implement an interface containing a single public method like this:

```php
<?php
public function handle(NameOfTheCommand $command);
```

#### Code example

In this example, we’ll create a `Command` to toggle the status of a `Product`.
We’ll assume you’re creating it inside a module, which is the recommended way to extend PrestaShop.

If you’re not familiar with module creation yet, see [how to create a module]({{< relref "/9/modules/creation/" >}}).

First declare the `CommandHandler` in the `config/services.yml` :

```yml
# services.yml

# Declare the CommandHandler service
Your\Namespace\CommandHandler\ToggleProductStatusHandler:
  autoconfigure: true
  public: true
```

{{% notice note %}}
if the handler is not found, ensure the module namespace is correctly registered in composer.json or in the class.
{{% /notice %}}

Then create two classes.
* The `Command` which provides the data needed in the `CommandHandler`.
* The `CommandHandler` which will process the data.

Create the Command

```php
<?php

namespace Your\Namespace\Command;

/**
 * Toggles the active status of a Product.
 */
final class ToggleProductStatusCommand
{
    public function __construct(
        private readonly int $productId,
        private readonly bool $status
    ) {}

    public function getProductId(): int
    {
        return $this->productId;
    }

    public function getStatus(): bool
    {
        return $this->status;
    }
}
```

Create the CommandHandler

Now, create the `CommandHandler` which will execute it. Note that the class must have the `AsCommandHandler` attribute.
It's also possible to do some validation and throw exceptions if needed.

```php
<?php

namespace Your\Namespace\CommandHandler;

use PrestaShop\PrestaShop\Core\CommandBus\Attributes\AsCommandHandler;
use Your\Namespace\Command\ToggleProductStatusCommand;
use PrestaShopException;
use Product;
use Validate;

#[AsCommandHandler]
final class ToggleProductStatusHandler
{
    public function handle(ToggleProductStatusCommand $command): void
    {
        $product = new Product($command->getProductId());

        if (!Validate::isLoadedObject($product)) {
            throw new PrestaShopException(sprintf('Product with id %d not found.', $command->getProductId()));
        }

        $product->active = $command->getStatus();
        $product->save();
    }
}
```

To execute the command, use the `CommandBus` service. The `CommandBus` automatically finds and executes the right handler thanks to the `#[AsCommandHandler]` attribute.

Here's an example from a Symfony controller.

```php
<?php
# Your controller

public function indexAction()
{
    $productId = 1;
    $status = false;

    $command = new ToggleProductStatusCommand($productId, $status);

    # Retrieves a prestashop.core.command_bus service
    $commandBus = $this->getCommandBus();

    $commandBus->handle($command);
}
```

### Query and QueryHandler principles

1. Data retrieval SHOULD always go through a `Query`.
2. A `Query` describes a **single** data query. It DOES NOT perform it.
3. A `Query` receives only primitive types on input (int, float, string, bool and array).
4. For every `Query` there MUST be at least one `QueryHandler` whose role is to execute that `Query` and return the resulting data set.
5. A `QueryHandler` SHOULD return a typed object, and SHOULD throw a typed `Exception` on failure.
6. A `QueryHandler` SHOULD use the existing `ObjectModel` for reads as long as it's reasonable to do so (in particular for CUD operations in BO migration).
7. A `QueryHandler` MUST be placed in the `Adapter` namespace as long as they have legacy dependencies.
8. A `QueryHandler` SHOULD return data objects that make sense to the domain, and SHOULD NOT leak internal objects.
9. A `QueryHandler` MUST implement an interface containing a single public method and a typed return like this: 

```php
<?php
/**
 * @param NameOfTheQuery $query
 *
 * @return TypeOfReturn
 */
public function handle(NameOfTheQuery $query): TypeOfReturn;
```

#### Code example

In this example, we’ll create a `Query` to retrieve some information of a `Product`.
We’ll assume you’re creating it inside a module, which is the recommended way to extend PrestaShop.

If you’re not familiar with module creation yet, see [how to create a module]({{< relref "/9/modules/creation/" >}}).

First declare the `QueryHandler` in the `config/services.yml` :

```yml
# services.yml

# Declare the QueryHandler service
Your\Namespace\QueryHandler\GetProductForEditingHandler:
  autoconfigure: true
  public: true
```

{{% notice note %}}
if the handler is not found, ensure the module namespace is correctly registered in composer.json or in the class.
{{% /notice %}}

Then create three classes.
* The `Query` which will be composed of the data needed to retrieve the product
* The `QueryHandler` which will retrieve the data
* The `QueryResult` class which represents the retrieved data in a structured object.

Create the Query

```php
<?php

namespace Your\Namespace\Query;

class GetProductForEditing
{
    public function __construct(private readonly int $productId) {}

    public function getProductId(): int
    {
        return $this->productId;
    }
}

```

Create the QueryResult

This example will just retrieve the product id and its name.

```php
<?php

namespace Your\Namespace\QueryResult;

class EditableProduct
{
    public function __construct(
        private readonly int $productId,
        private readonly array $name
    ) {}

    public function getProductId(): int
    {
        return $this->productId;
    }

    public function getName(): array
    {
        return $this->name;
    }
}

```

Create the QueryHandler

Now, create the `QueryHandler` which will execute the `Query` and return an `EditableProduct` object. Note that the class must have the `AsQueryHandler` attribute.
It's also possible to do some validation and throw exceptions if needed.

```php
<?php

namespace Your\Namespace\QueryHandler;

use Your\Namespace\QueryResult\EditableProduct;
use Your\Namespace\Query\GetProductForEditing;
use PrestaShop\PrestaShop\Core\CommandBus\Attributes\AsQueryHandler;
use PrestaShopException;
use Product;
use Validate;

#[AsQueryHandler]
final class GetProductForEditingHandler
{
    public function handle(GetProductForEditing $query): EditableProduct
    {
        $product = new Product($query->getProductId());

        if (!Validate::isLoadedObject($product)) {
            throw new PrestaShopException(sprintf('Product with id %d not found.', $query->getProductId()));
        }

        // Return an EditableProduct object containing the requested information
        return new EditableProduct(
            $product->id,
            $product->name
        );
    }
}
```

Execute the Query

To execute the `Query`, use the `QueryBus` service. The `QueryBus` automatically finds and executes the right handler thanks to the `#[AsQueryHandler]` attribute.

Here's an example from a Symfony controller.

```php
<?php
# Your controller

public function indexAction()
{
    # Retrieves a prestashop.core.query_bus service
    $queryBus = $this->getQueryBus();

    $query = new GetProductForEditing(1);

    /** @var EditableProduct $editableProduct */
    $editableProduct = $queryBus->handle($query);
}
```

## Command and Query buses

Command bus is a pattern used to map `Commands` and `Queries` to `CommandHandlers` and `QueryHandlers`. PrestaShop defines it's own `CommandBusInterface` and implements it using [Tactician command bus library](https://tactician.thephpleague.com/).

PrestaShop uses 2 commands buses:

1. `CommandBus` - for dispatching `Commands` only
2. `QueryBus` - for dispatching `Queries` only

### CQRS in Debug Toolbar

To help you understand which command/queries are used on a page and how you can interact with them a profiler has been added in the Symfony debug toolbar.

{{< figure src="../img/cqrs-debug-toolbar.png" title="CQRS Debug Toolbar" >}}

It shows you a quick resume of the CQRS commands/queries used on the page, you can then have more details in the Symfony profiler page:

{{< figure src="../img/cqrs-profiler.png" title="CQRS Profiler" >}}

