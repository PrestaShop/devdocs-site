---
title: "displayPDF\u003cTemplate\u003e"
url: "https://devdocs.prestashop-project.org/9/modules/concepts/hooks/list-of-hooks/displaypdftemplate/"
version: "9"
description: "Allows to add content in HTML to PDF templates"
source: "https://github.com/PrestaShop/docs/blob/9.x/modules/concepts/hooks/list-of-hooks/displayPDF\u003cTemplate\u003e.md"
---


{{% hookDescriptor %}}

## Call of the Hook in the origin file

```php
<!-- Hook -->
{if isset($HOOK_DISPLAY_PDF)}
    <tr>
        <td colspan="12" height="30">&nbsp;</td>
    </tr>

    <tr>
        <td colspan="12">
            {$HOOK_DISPLAY_PDF}
        </td>
    </tr>
{/if}
```

This hook is a dynamic hook, generated in `classes/pdf/HTMLTemplate.php`: 

```php
$template = ucfirst(str_replace('HTMLTemplate', '', get_class($this)));
$hook_name = 'displayPDF' . $template;

$this->smarty->assign([
    'HOOK_DISPLAY_PDF' => Hook::exec(
        $hook_name,
        [
            'object' => $object,
            // The smarty instance is a clone that does NOT escape HTML
            'smarty' => $this->smarty,
        ]
    ),
]);
```
