---
title: "API Platform and CQRS integration"
url: "https://devdocs.prestashop-project.org/9/admin-api/resource_server/api-platform/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/admin-api/resource_server/api-platform.md"
---


# API Platform and CQRS integration

## CQRS based API

Since the beginning of the Symfony migration, we chose CQRS as our base architecture, and their usage for the future API was already anticipated because:

- it gives a more "domain approach" to our implementation, with more business logic than a simple CRUD
- since the BO is already based on CQRS commands, it guarantees a uniform behaviour between the BO and the API
- all the CQRS commands and queries are Behat tested, so they give a good insurance for stability
- we capitalize on all the work that was done during the BO migration to build the Admin API

## API Platform

The implementation of the Admin API is based on the API Platform framework, this technical choice was made because of these advantages:

- it is already known by many developers of the PHP/Symfony ecosystem
- it provides Provider/Processor abstractions that allows implementing custom behaviours for our CQRS integration
- it provides rapid development tools (based on Doctrine entities, for example) for modules
- it integrates Swagger and generates a doc for the API automatically

### API Resource classes

The configuration and definition of the core endpoints are centralized inside **API Resource classes** that are used as DTOs and configuration thanks to PHP attributes. You can read the [API Resources]({{< relref "./api-resources" >}}) page for more details about these classes.

## Providers and Processors

To integrate our CQRS commands and queries into the API Platform framework, we used the Provider/Processor abstractions (Provider for read operations and Processor for write operations).

We developed three components:
- `PrestaShopBundle\ApiPlatform\Provider\QueryProvider`: responsible for read (GET) operation accessing a single resource, it executes CQRS queries
- `PrestaShopBundle\ApiPlatform\Provider\QueryListProvider`: responsible for read (GET) operation accessing a list of resources, it executes Grid data factories used in the BO listing pages
- `PrestaShopBundle\ApiPlatform\Processor\CommandProcessor`: responsible for write operations (POST, PUT, PATCH, DELETE) on resources, it executes CQRS commands

All these components have similar behavior. They receive an API Platform resource as input (a DTO with configuration, filled with the input data from the request). They use a `DomainSerializer` service to normalize the DTOs into CQRS commands/queries and dispatch them to the command bus.
The result object is then normalized back into the API Platform resource object and returned so the framework follows its execution (mostly serializing the response).

In the following diagrams, you can see the workflow of each component, separated into three different layers:
- API Platform: what happens in the framework and the provider/process
- CQRS Layer: The CQRS handlers executed, responsible for the actual action of the endpoint
- Data: the sequence of transformation of the data (request input, API Platform DTO, CQRS commands/queries)

### Query Provider

{{< figure src="../../img/query-provider.drawio.svg" title="Query Provider" >}}

{{% notice note %}}
You can update this schema using the [source XML file](/9/admin-api/img/query-provider.drawio) importable in services like [draw.io](https://draw.io).
{{% /notice %}}

### Command processor

The second part is optional, depending on the endpoint expected return (empty response, or the update response content), it follows the same workflow as the QueryProvider.

{{< figure src="../../img/command-processor.drawio.svg" title="Command Processor" >}}

{{% notice note %}}
You can update this schema using the [source XML file](/9/admin-api/img/command-processor.drawio) importable in services like [draw.io](https://draw.io).
{{% /notice %}}

