---
title: "Context of the Admin API"
url: "https://devdocs.prestashop-project.org/9/admin-api/context/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/admin-api/context.md"
---


# Context of the Admin API

## Why a new Admin API?

The new admin API is here to replace and improve the existing [Webservice API]({{< relref "../webservice" >}}) that has a few drawbacks:

- Limited permission and security management
- Performs CRUD operations without much intelligence
- A bit old compared to the new web standards
- Legacy code, not tested, hard to maintain, scary to modify
- Based on ObjectModel which is supposed to disappear one day

### The goals of the new Admin API

The modern API is meant to answer these new needs:

- to bring a more secure API
- to allow more tracking in actions (know who/what is doing what)
- to give more intelligence to the API than basic CRUD
- to be more in tune with the modern standards
- to be extendable by modules

To reach these goals, we decided an implementation based on:

- OAuth2 authentication / authorization
- PHPLeague OAuth 2.0 Server library
- API Platform framework
- CQRS commands / queries integration
- Module extension by default (even for core endpoints)

