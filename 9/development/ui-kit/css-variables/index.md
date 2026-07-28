---
title: "CSS variables"
url: "https://devdocs.prestashop-project.org/9/development/ui-kit/css-variables/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/development/ui-kit/css-variables.md"
---


# CSS variables in PrestaShop UI Kit

PrestaShop UI Kit uses CSS variables for design harmonization in the back office.

## Why use CSS variables?

CSS variables provide several advantages in large-scale projects like PrestaShop:

### 1. Avoiding naming conflicts

In projects with multiple themes or libraries, variable names can overlap. Using prefixes like `cdk-` (Core Design Kit) ensures that variables are unique and do not override variables from other parts of the project or third-party libraries.

### 2. Maintain consistency

A consistent naming convention, such as the `cdk` prefix, allows developers to quickly identify variables associated with the UI Kit. This promotes a cohesive design language across the project.

### 3. Foundation for future development

CSS variables are a step towards creating design tokens, laying the groundwork for future features, such as customizable back-office interface colors, and increasing flexibility for future developments.

### Summary

Using CSS variables with prefixes improves consistency, readability, and maintenance, making it a best practice for managing styles in complex projects.

For example, `--cdk-primary-800` represents a color in the Core Design Kit. This prefix indicates that the variable is part of the Core Design Kit, avoiding conflicts with other variables and maintaining design consistency. This approach standardizes design elements and improves code clarity across the back office.

