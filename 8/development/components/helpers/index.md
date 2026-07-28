---
title: "Helper classes"
url: "https://devdocs.prestashop-project.org/8/development/components/helpers/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/development/components/helpers/_index.md"
---


# Helper classes

Helper classes enable you to generate standard HTML elements for legacy back office pages as well as for module configuration pages.

## The Main Helpers

All the helper classes inherit from the `Helper` parent class:

- [`HelperForm`]({{< ref "helperform" >}}): used to generate an edition form for an ObjectModel. Example: editing the client's profile.
- [`HelperOptions`]({{< ref "helperoptions" >}}): used to generate a configuration form, the values of which are stored in the `configuration` table. Example: the "Preferences" page.
- [`HelperList`]({{< ref "helperlist" >}}): used to generate a table of elements. The elements can belong to ObjectModel-type objects, but they do not have to. Example: client list, order status list, etc.


