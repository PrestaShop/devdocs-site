---
title: "Internal and cross links"
url: "https://devdocs.prestashop-project.org/1.7/contribute/documentation/shortcodes/ref/"
version: "1.7"
source: "https://github.com/PrestaShop/docs/blob/1.7.x/contribute/documentation/shortcodes/ref.md"
---


# Internal and cross links

## Cross links

To link to another page in the documentation, use `ref`:

    [This is a link to Configuration]({{</* ref "1.7/basics/configuration.md" */>}})


Rendered result:

{{% callout %}}
[This is a link to Configuration]({{< ref "1.7/basics/installation/configuration" >}})
{{% /callout %}}

{{% notice tip %}}
Don't forget to put the link between double quotes.
{{% /notice %}}

## Internal links

To a link that points to a specific point in the current page, use `relref`:

    [This is a link to the first title]({{</* relref "#cross-links" */>}})
    
Rendered result:

{{% callout %}}
[This is a link to the first title]({{< relref "#cross-links" >}})
{{% /callout %}}

{{% notice info %}}
**Internal links need to be "slugified" to work.**

If you feel lost, here's a [tool that will slugify your titles](https://you.tools/slugify/).
{{% /notice %}}

