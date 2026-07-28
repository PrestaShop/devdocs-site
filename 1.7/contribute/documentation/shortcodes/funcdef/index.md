---
title: "Function definition"
url: "https://devdocs.prestashop-project.org/1.7/contribute/documentation/shortcodes/funcdef/"
version: "1.7"
source: "https://github.com/PrestaShop/docs/blob/1.7.x/contribute/documentation/shortcodes/funcdef.md"
---


# Function definition

To render a list of function definitions, use `funcdef` in combination with Markdown definition list:

```markdown
{{%/* funcdef */%}}

__construct($id = NULL, $id_lang = NULL)
: 
    Build object.

add($autodate = true, $nullValues = false)
: 
    Save current object to database (add or update).

{{%/* /funcdef */%}}
```

Rendered result:

{{% callout %}}
{{% funcdef %}}

__construct($id = NULL, $id_lang = NULL)
: 
    Build object.

add($autodate = true, $nullValues = false)
: 
    Save current object to database (add or update).

{{% /funcdef %}}
{{% /callout %}}

{{% notice info %}}
Be aware that you need to leave at least one trailing space after each `:` for the markup to be correctly interpreted as a definition list. 
{{% /notice %}}

