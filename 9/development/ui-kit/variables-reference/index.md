---
title: "CSS variables reference"
url: "https://devdocs.prestashop-project.org/9/development/ui-kit/variables-reference/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/development/ui-kit/variables-reference.md"
---


# CSS variables reference

Discover a summary of the main CSS variables available through the PrestaShop UI Kit.

- <a href="https://github.com/PrestaShop/prestashop-ui-kit/blob/develop/scss/_root.scss" target="_blank">See exposed CSS variables</a>

## Colors

These variables should be used when you want to apply a color on the BO.

<table>
  <tr>
    <th>Main</th>
    <th>Variable name</th>
    <th>Used for (non-exhaustive list)</th>
  </tr>
  <!-- PRIMARY -->
  <tr>
    <td rowspan="9">Primary</td>
    <td style="background:#101010;color:white;">--cdk-primary-900</td>
    <td>...</td>
  </tr>
  <tr>
    <td style="background:#1d1d1b;color:white;">--cdk-primary-800</td>
    <td>Header background / Primary button background</td>
  </tr>
  <tr>
    <td style="background:#3f3f3d;color:white;">--cdk-primary-700</td>
    <td>Buttons states</td>
  </tr>
  <tr>
    <td style="background:#5e5e5e;color:white;">--cdk-primary-600</td>
    <td>UI elements / On login page</td>
  </tr>
  <tr>
    <td style="background:#bbb;color:black;">--cdk-primary-500</td>
    <td>Some icons / Buttons states</td>
  </tr>
  <tr>
    <td style="background:#ddd;color:black;">--cdk-primary-400</td>
    <td>Borders color</td>
  </tr>
  <tr>
    <td style="background:#eee;color:black;">--cdk-primary-300</td>
    <td>Nav bar / Buttons states / Tables</td>
  </tr>
  <tr>
    <td style="background:#f7f7f7;color:black;">--cdk-primary-200</td>
    <td>Disabled form elements / Tables</td>
  </tr>
  <tr>
    <td style="background:#fafafa;color:black;">--cdk-primary-100</td>
    <td>Tables</td>
  </tr>
  <!-- RED -->
  <tr>
    <td rowspan="5">Red</td>
    <td style="background:#a41913;color:white;">--cdk-red-700</td>
    <td rowspan="5">Alert, Destructive, Danger elements</td>
  </tr>
  <tr>
    <td style="background:#ba151a;color:white;">--cdk-red-500</td>
  </tr>
  <tr>
    <td style="background:#d63f3c;color:white;">--cdk-red-300</td>
  </tr>
  <tr>
    <td style="background:#fdbfbf;color:black;">--cdk-red-100</td>
  </tr>
  <tr>
    <td style="background:#ffe4e6;color:black;">--cdk-red-50</td>
  </tr>
  <!-- PURPLE -->
  <tr>
    <td rowspan="3">Purple</td>
    <td style="background:#7b4fac;color:white;">--cdk-purple-700</td>
    <td rowspan="3">New branding color</td>
  </tr>
  <tr>
    <td style="background:#decde7;color:black;">--cdk-purple-500</td>
  </tr>
  <tr>
    <td style="background:#f8f0f7;color:black;">--cdk-purple-50</td>
  </tr>
  <!-- BLUE -->
  <tr>
    <td rowspan="5">Blue</td>
    <td style="background:#2942cc;color:white;">--cdk-blue-700</td>
    <td rowspan="5">UI / States, Infos elements</td>
  </tr>
  <tr>
    <td style="background:#174eef;color:white;">--cdk-blue-500</td>
  </tr>
  <tr>
    <td style="background:#a2b8f9;color:black;">--cdk-blue-300</td>
  </tr>
  <tr>
    <td style="background:#d1dcfc;color:black;">--cdk-blue-100</td>
  </tr>
  <tr>
    <td style="background:#e8edfd;color:black;">--cdk-blue-50</td>
  </tr>
  <!-- OCEAN BLUE -->
  <tr>
    <td rowspan="3">Ocean blue</td>
    <td style="background:#5c92aa;color:white;">--cdk-ocean-blue-700</td>
    <td rowspan="3">New branding color</td>
  </tr>
  <tr>
    <td style="background:#a4dbe8;color:white;">--cdk-ocean-blue-500</td>
  </tr>
  <tr>
    <td style="background:#e4f4f8;color:black;">--cdk-ocean-blue-50</td>
  </tr>
  <!-- YELLOW -->
  <tr>
    <td rowspan="4">Yellow</td>
    <td style="background:#ffa000;color:white;">--cdk-yellow-500</td>
    <td rowspan="4">Warning elements</td>
  </tr>
  <tr>
    <td style="background:#ffd999;color:black;">--cdk-yellow-300</td>
  </tr>
  <tr>
    <td style="background:#ffeccc;color:black;">--cdk-yellow-100</td>
  </tr>
  <tr>
    <td style="background:#fff5e5;color:black;">--cdk-yellow-50</td>
  </tr>
  <!-- AMBER -->
  <tr>
    <td rowspan="2">Amber</td>
    <td style="background:#f8e08e;color:black;">--cdk-amber-500</td>
    <td rowspan="2">New branding color</td>
  </tr>
  <tr>
    <td style="background:#fdf6dd;color:black;">--cdk-amber-100</td>
  </tr>
  <!-- GREEN -->
  <tr>
    <td rowspan="4">Green</td>
    <td style="background:#207f4b;color:white;">--cdk-green-500</td>
    <td rowspan="4">Success elements</td>
  </tr>
  <tr>
    <td style="background:#59af70;color:black;">--cdk-green-300</td>
  </tr>
  <tr>
    <td style="background:#bde9c9;color:black;">--cdk-green-100</td>
  </tr>
  <tr>
    <td style="background:#eaf8ef;color:black;">--cdk-green-50</td>
  </tr>
  <!-- COMMON -->
  <tr>
    <td>Black</td>
    <td style="background:#000;color:white;">--cdk-black</td>
    <td>...</td>
  </tr>
  <tr>
    <td>White</td>
    <td style="background:#fff;color:black;">--cdk-white</td>
    <td>...</td>
  </tr>
</table>

## Fonts

These variables should be used for fonts family in the BO.

<table>
  <tr>
  <th>Variable name</th>
  <th>Value</th>
  <th>Used for</th>
  </tr>
  <tr>
    <td>--cdk-font-family-primary</td>
    <td>"IBM Plex Sans", "Verdana", "Arial", "sans-serif"</td>
    <td>Primary font</td>
  </tr>
  <tr>
    <td>--cdk-font-family-secondary</td>
    <td>"IBM Plex Sans", "Verdana", "Arial", "sans-serif"</td>
    <td>Secondary font (currently the same as primary)</td>
  </tr>
  <tr>
    <td>--cdk-font-family-material-icons</td>
    <td>"Material Symbols Outlined", "sans-serif"</td>
    <td>Font icons</td>
  </tr>
</table>

## Sizing / Spacing

These variables can be used when you want to apply sizing or spacing on the BO.

- <a href="https://github.com/PrestaShop/prestashop-ui-kit/blob/1c255d96d79c69e2d3e0dd1712f76379941c06bb/scss/_root.scss#L74" target="_blank">See available sizing variables</a>

**Explanation:**

```CSS
.alert {
  font-size: var(--cdk-size-16); /* = 1rem -> size-16 stand for 16px and variables values are in rem */
  margin-bottom: var(--cdk-size-32); /* = 2rem -> size-32 stand for 32px and variables values are in rem */
  ...
}
```

