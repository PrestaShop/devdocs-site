---
title: "Admin API"
url: "https://devdocs.prestashop-project.org/9/admin-api/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/admin-api/_index.md"
---


### Chapter 7

# Admin API in PrestaShop 9

The Admin API in PrestaShop 9 is based on the popular [API Platform](https://api-platform.com/) in version 3 and fully takes advantage of its benefits.

The new API utilizes the OAuth authorization protocol and [CQRS commands]({{< relref "../development/architecture/domain/references" >}}) for its endpoints. CQRS-based endpoints are more domain-oriented and enhance business logic management compared to traditional web services connected to ObjectModel. This approach allows us to better separate concerns, align API operations closely with business requirements, and improve maintainability and scalability.

## Learn more

{{% children /%}}

