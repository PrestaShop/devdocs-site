---
title: "FormattedTextareaType"
url: "https://devdocs.prestashop-project.org/9/development/components/form/types-reference/formatted-textarea/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/development/components/form/types-reference/formatted-textarea.md"
---


# FormattedTextareaType

Enables TinyMCE text editor on TextareaType.

## Type options

| Option   | Type | Default value | Description                                                                                                            |
|:---------|:-----|:--------------|:-----------------------------------------------------------------------------------------------------------------------|
| autoload | bool | true          | Whether to automatically load TinyMCE editor, or no.                                                                   |
| limit    | int  | 21844         | Limit of characters in text field. By default value equals to max size of UTF-8 content available in MySQL text column |

## Required Javascript components

| Component                                                             | Description                         |
|:----------------------------------------------------------------------|:------------------------------------|
| TinyMCEEditor | Rich text editor |

{{% notice note %}}
Learn more about [Javascript components and how to use them]({{<relref "/9/development/components/global-components">}})
{{% /notice %}}

## Code example

```php
<?php
// path/to/your/CustomType.php

use PrestaShopBundle\Form\Admin\Type\FormattedTextareaType;

class CustomType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add(
                'test_text_field',
                FormattedTextareaType::class
            )
        ;
    }
}
```

This field require that you use the Prestashop UI Kit for the form.
```php
{% form_theme demoConfigurationTextForm '@PrestaShop/Admin/TwigTemplateForm/prestashop_ui_kit.html.twig' %}

{% block content %}
  {{ form_start(demoConfigurationTextForm) }}
  <div class="card">
    <h3 class="card-header">
      <i class="material-icons">settings</i> {{ 'Text form types'|trans({}, 'Modules.DemoSymfonyForm.Admin') }}
    </h3>
    <div class="card-body">
      <div class="form-wrapper">
        {{ form_widget(demoConfigurationTextForm) }}
      </div>
    </div>
    <div class="card-footer">
      <div class="d-flex justify-content-end">
        <button class="btn btn-primary float-right" id="save-button">
          {{ 'Save'|trans({}, 'Admin.Actions') }}
        </button>
      </div>
    </div>
  </div>
  {{ form_end(demoConfigurationTextForm) }}
{% endblock %}
```

## Preview example

{{< figure src="../img/formatted_textarea.png" title="FormattedTextareaType rendered in form example" >}}

