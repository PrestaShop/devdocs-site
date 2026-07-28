---
title: "Legacy Controllers"
url: "https://devdocs.prestashop-project.org/1.7/development/architecture/legacy/legacy-controllers/"
version: "1.7"
source: "https://github.com/PrestaShop/docs/blob/1.7.x/development/architecture/legacy/legacy-controllers.md"
---


# Legacy Controllers

Legacy controllers are based on PrestaShop's custom framework and go a long way back. All front controllers and all Admin controllers that haven't been migrated to Symfony yet are based on this.

## Execution flow

Legacy controllers work best when a Controller performs a single action, for example, render a page. The process has been divided in several methods, which simplifies customization via method override.

{{< figure src="../img/legacy-controller-flow.png" title="Execution flow of legacy controllers" >}}

