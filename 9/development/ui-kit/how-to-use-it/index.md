---
title: "How to use it?"
url: "https://devdocs.prestashop-project.org/9/development/ui-kit/how-to-use-it/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/development/ui-kit/how-to-use-it.md"
---


# How to use a new set of CSS variables?

To maintain consistency across the PrestaShop back office, CSS variables have been introduced in `_root.scss`. This guide explains how to use them.

## Using CSS variables in PrestaShop 9.0+

In PrestaShop v9 and later, we use the CSS variables introduced in `_root.scss` for consistent styling in the back office.

### Usage Example

```scss
/* CSS: Apply dark background on a block */
.my-block {
  background-color: var(--cdk-primary-800);
}

/* SCSS: Apply dark background on a block */
.my-block {
  background-color: var(--#{$cdk}primary-800);
}
```

**Note:**

- `--cdk-primary-800` is a CSS variable defined in `_root.scss`. It ensures consistent color application across the back office.
- [List of available CSS variables][variables-list]

[variables-list]: {{< ref "/9/development/ui-kit/variables-reference.md" >}}

## Using CSS variables with older versions

For PrestaShop versions without the UI Kit v2, use fallbacks to ensure compatibility.

### Fallback Example

```scss
/* CSS: Apply dark background on a block with fallback */
.my-block {
  background-color: var(--cdk-primary-800, #1b1c1d);
}

/* SCSS: Apply dark background on a block with fallback */
.my-block {
  background-color: var(--#{$cdk}primary-800, #1b1c1d);
}
```

**Note:**

- Fallback values (e.g., `#1b1c1d`) ensure functionality in versions without the new UI Kit v2.

