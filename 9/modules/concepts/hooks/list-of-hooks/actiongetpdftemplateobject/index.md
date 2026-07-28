---
title: "actionGetPdfTemplateObject"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actiongetpdftemplateobject/"
version: "9"
description: "This hook allows modules to override the default PDF template object used for generating PDFs like invoices, delivery slips, and order returns."
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionGetPdfTemplateObject.md"
---


{{% hookDescriptor %}}

## Parameters

```php
[
    'object' => $object,        // The source object (Order, OrderReturn, etc.)
    'smarty' => $smarty,        // Smarty template engine instance
    'send_bulk_flag' => $send_bulk_flag,  // Boolean indicating bulk PDF generation
    'template' => $template,    // Template type string (e.g., 'Invoice', 'OrderReturn')
]
```

## Expected return value

Return an `HTMLTemplate` instance to override the default template, or `false` to use the default behavior.

## Call of the Hook in the origin file

```php
$templateObjects = Hook::exec(
    'actionGetPdfTemplateObject',
    [
        'object' => $object,
        'smarty' => $smarty,
        'send_bulk_flag' => $send_bulk_flag,
        'template' => $template,
    ],
    null,
    true
);
```

## Example usage

```php
public function hookActionGetPdfTemplateObject($params)
{
    // Only handle invoices
    if ($params['template'] !== 'Invoice') {
        return false;
    }

    // Return a custom template object
    return new MyCustomInvoiceTemplate(
        $params['object'],
        $params['smarty'],
        $params['send_bulk_flag']
    );
}
```

