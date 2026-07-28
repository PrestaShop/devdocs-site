---
title: "Form Theme"
url: "https://devdocs.prestashop-project.org/8/development/components/form/form-theme/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/development/components/form/form-theme/_index.md"
---


# Form Theme

Symfony's [Form feature][sf-form-component] leverages Form Types to detail how your forms are supposed to behave in your application, handle validation, and mapping the forms to your data structures. In addition to that, Symfony forms can also render themselves to HTML using a FormRenderer and Twig.

The code below renders a whole form using Twig:

```twig
{# templates/default/new.html.twig #}
{{ form_start(form) }}
{{ form_widget(form) }}
{{ form_end(form) }}
```

[sf-form-component]: https://symfony.com/doc/4.4/forms.html

## Read more

{{% children /%}}


