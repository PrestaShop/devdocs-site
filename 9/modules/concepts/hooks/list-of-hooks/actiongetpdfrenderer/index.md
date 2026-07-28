---
title: "actionGetPdfRenderer"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/actiongetpdfrenderer/"
version: "9"
description: "This hook allows modules to provide a custom PDF renderer (PDFGenerator) for generating PDF documents like invoices, delivery slips, and order returns."
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/actionGetPdfRenderer.md"
---


{{% hookDescriptor %}}

## Parameters

```php
[
    'template' => $template,      // Template type string (e.g., 'Invoice', 'OrderReturn')
    'orientation' => $orientation, // Page orientation ('P' for portrait, 'L' for landscape)
]
```

## Expected return value

Return a `PDFGenerator` instance to use a custom renderer, or `null` to use the default TCPDF-based renderer.

## Call of the Hook in the origin file

```php
$renderers = Hook::exec(
    'actionGetPdfRenderer',
    [
        'template' => $template,
        'orientation' => $orientation,
    ],
    null,
    true
);
```

## Example usage

```php
public function hookActionGetPdfRenderer($params)
{
    // Use a custom PDF library for all templates
    return new MyCustomPdfGenerator($params['orientation']);
}
```

## Use cases

This hook is useful when you need to:

- Use a different PDF library (e.g., Dompdf, mPDF) instead of the default TCPDF
- Apply custom PDF settings globally (fonts, margins, headers)
- Implement PDF/A compliance for archiving
- Add watermarks or security features to all generated PDFs

