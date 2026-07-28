---
title: "Faceted search"
url: "https://devdocs.prestashop-project.org/9/development/components/faceted-search/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/development/components/faceted-search/_index.md"
---


# Faceted search

# Introduction

PrestaShop front-office provides a faceted search capability, powered by the module https://github.com/PrestaShop/ps_facetedsearch/

The module allows customers to search for products using multiple filters and mix them.

It is built on the top of a filtering engine that maps user input to SQL queries.

## The heir of blocklayered

This feature was available in PrestaShop before 1.7 through the module `blocklayered`.

Blocklayered module was attempting to emulate the `CategoryController` and fetch templates from the theme without any guarantee of the templates being there.

Any change in the behavior of the `CategoryController` or a template renaming required `blocklayered` module, and themes had to adapt to this change too.

{{< figure src="img/facetedsearch.png" title="Faceted search screenshot" >}}


{{% children /%}}
