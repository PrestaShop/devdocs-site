---
title: "Supported branches"
url: "https://devdocs.prestashop-project.org/9/contribute/contribution-guidelines/supported-branches/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/contribute/contribution-guidelines/supported-branches.md"
---


# Supported branches

Maintainers will only accept contributions for branches that are subject to new releases.

The **development branch** (`develop`) contains the development code for the next minor or major version, and is the natural destination for all contributions.

The **patch version branch** (e.g. `9.0.x`) contains the code for the next patch release for a given version. Under specific conditions, this is where some bug fixes are destined.

{{% notice tip %}}
**TL;DR**
When in doubt, target the `develop` branch. We will ask you to rebase on the correct branch if necessary.
{{% /notice %}}


## Understanding active & closed branches

The `develop` branch is always active and open to contributions.

Each minor version has its own patch branch: patches for the 9.0 version go in the `9.0.x` branch, while patches for 9.1 go in `9.1.x`... and so on. 

These branches are created and closed following the support window of each version. Once the support for a version is over and no new patch releases are expected for it, its corresponding branch becomes closed to contribution. 

Except for rare cases, a patch version branch is closed the moment the following minor version is released. For example, the `9.0.x` branch is closed once the 9.1 version has been released, giving way to the `9.1.x` branch. 

**Pull Requests targeting closed branches will not be accepted.**

## Bug fixes and patch branches

Patch branches accept all types of bug fixes, including critical issues, security bugs, and regressions introduced in the same version.

A regression is a bug that breaks a feature that previously worked well. For example, if a feature worked in 9.0 but a bug in 9.1 caused it to stop working, that’s considered a regression introduced in 9.1, which should be fixed in the `9.1.x` branch—as long as that branch is still open.

{{% notice tip %}}If you're unsure whether the bug is a regression, you can still submit your fix to the patch branch. Project maintainers will determine if the fix should be applied to the patch branch or redirected to the develop branch instead. {{% /notice %}}

If you want to submit a fix for a regression in a version that no longer receives patches, first verify if the bug is still present in the develop branch. If it is, submit your fix against the `develop` branch.

## New hooks in patch branches

While new hooks may be treated as features and therefore not accepted in patch branches, there are exceptions for hooks that are critical for the proper functioning of the module or aim to help with the situation where overrides are either required or not possible. Since overrides are not recommended, we may accept new hooks in patch branches to help developers avoid them.

In these cases, the maintainers may accept new hooks in patch branches. If you believe your hook falls into this category, [let's discuss it](https://github.com/PrestaShop/PrestaShop/discussions/categories/ideas) before submitting a pull request.

