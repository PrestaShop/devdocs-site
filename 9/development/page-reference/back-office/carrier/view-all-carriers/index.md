---
title: "View all carriers"
url: "https://devdocs.prestashop-project.org/9/development/page-reference/back-office/carrier/view-all-carriers/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/development/page-reference/back-office/carrier/view-all-carriers/_index.md"
---


# View all carriers

This page can be reached by visiting `Shipping -> Carriers` in the admin panel. It displays a list of all carriers that have been added and allow to add, edit or delete them.
The **related code can be found in following locations**:

- **CarrierController**
  [src/PrestaShopBundle/Controller/Admin/Improve/Shipping/CarrierController.php](https://github.com/PrestaShop/PrestaShop/blob/develop/src/PrestaShopBundle/Controller/Admin/Improve/Shipping/CarrierController.php)
- Main **twig template** [src/PrestaShopBundle/Resources/views/Admin/Improve/Shipping/Carriers/index.html.twig](https://github.com/PrestaShop/PrestaShop/blob/develop/src/PrestaShopBundle/Resources/views/Admin/Improve/Shipping/Carriers/index.html.twig)
- **Javascript** ([pre-compiled]({{< relref "/9/development/compile-assets" >}})) [admin-dev/themes/new-theme/js/pages/carrier/index.ts](https://github.com/PrestaShop/PrestaShop/blob/develop/admin-dev/themes/new-theme/js/pages/carrier/index.ts).

Once opened, the page will show following blocks:

- [Showcase card]({{< relref "#showcase-card" >}})
- [Carriers grid]({{< relref "#carriers-grid" >}})

## Page blocks

### Showcase card

{{< figure src="./img/showcase-card.png" title="Showcase card" >}}

The name of this card is `ShowcaseCard::CARRIERS_CARD` and it can be closed by clicking the `x` button in the top right corner. The card is displayed only once per employee.

You can check the status of this card by querying the [`GetShowcaseCardIsClosed`](https://github.com/PrestaShop/PrestaShop/blob/develop/src/Core/Domain/ShowcaseCard/Query/GetShowcaseCardIsClosed.php) query.

### Carriers grid

{{< figure src="./img/carriers-grid.png" title="Carriers grid" >}}

Show list of carriers with the ability to filter, sort them and perform actions like activating, deactivating, editing or deleting them.

The **related code can be found in following locations**:

- **CarrierGridDefinitionFactory**
  [src/Core/Grid/Definition/Factory/CarrierGridDefinitionFactory.php](https://github.com/PrestaShop/PrestaShop/blob/develop/src/Core/Grid/Definition/Factory/CarrierGridDefinitionFactory.php) (for the grid definition)
- **CarrierGridDataFactory**
  [src/Core/Grid/Data/Factory/CarrierGridDataFactory.php](https://github.com/PrestaShop/PrestaShop/blob/develop/src/Core/Grid/Data/Factory/CarrierGridDataFactory.php) (for the grid data)

{{% notice %}}
As you can notice, carrier can change its ID when it is edited. In fact, if you edit a carrier that is already associated with an order, the carrier ID will change automatically.
{{% /notice %}}

