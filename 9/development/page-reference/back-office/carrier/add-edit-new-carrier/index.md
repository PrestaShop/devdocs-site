---
title: "Add or edit a carrier"
url: "https://devdocs.prestashop-project.org/9/development/page-reference/back-office/carrier/add-edit-new-carrier/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/development/page-reference/back-office/carrier/add-edit-new-carrier/_index.md"
---


# Add or edit a carrier

Page can be reached by visiting `Shipping -> Carriers -> Add new carrier` in the admin panel or also by clicking on the `Edit` button in [the carriers listing](./../view-all-carriers).
It allows the Back Office user to edit or create a new carrier.

{{% notice %}}

When you edit a carrier, sometimes the data of the carrier is simply altered, sometimes a copy of the data is done, the previous data is de-activated but preserved, and your modifications are done on the new copy. This happens when a customer has purchased an order using this carrier, in order to preserve the carrier data as it was during the purchase.

{{% /notice %}}

## Page specifics

This form is divided in 3 sub-forms. Each sub-form as a different purpose:

- **General settings**: carrier name, logo, tracking URL, etc.
- **Shipping locations & costs**: carrier zones, countries, prices, free shipping, etc.
- **Size and weight**: carrier size and weight restrictions.

The **related code of this main form can be found in following locations**:

- Twig template of the form:
  [src/PrestaShopBundle/Resources/views/Admin/Improve/Shipping/Carriers/form.html.twig](https://github.com/PrestaShop/PrestaShop/blob/develop/src/PrestaShopBundle/Resources/views/Admin/Improve/Shipping/Carriers/form.html.twig)
- All Javascript code related to this form can be found at:
  [admin-dev/themes/new-theme/js/pages/carrier/form](https://github.com/PrestaShop/PrestaShop/blob/develop/admin-dev/themes/new-theme/js/pages/carrier/form/) (These `.ts` files are the `develop` version prior compiling. See ["How to compile assets"]({{< relref "/9/development/compile-assets" >}}) for more information.)
- Main definition of the form: [src/PrestaShopBundle/Form/Admin/Improve/Shipping/Carrier/CarrierType.php](https://github.com/PrestaShop/PrestaShop/blob/develop/src/PrestaShopBundle/Form/Admin/Improve/Shipping/Carrier/CarrierType.php)
- Data provider of the form: [src/Core/Form/IdentifiableObject/DataProvider/CarrierFormDataProvider.php](https://github.com/PrestaShop/PrestaShop/blob/develop/src/Core/Form/IdentifiableObject/DataProvider/CarrierFormDataProvider.php)
- Handler of the form:
  [src/Core/Form/IdentifiableObject/DataHandler/CarrierFormDataHandler.php](https://github.com/PrestaShop/PrestaShop/blob/develop/src/Core/Form/IdentifiableObject/DataHandler/CarrierFormDataHandler.php)

{{% notice %}}

The handler use [`AddCarrierCommand`](https://github.com/PrestaShop/PrestaShop/blob/develop/src/Core/Domain/Carrier/Command/AddCarrierCommand.php) to create a new carrier, [`EditCarrierCommand`](https://github.com/PrestaShop/PrestaShop/blob/develop/src/Core/Domain/Carrier/Command/EditCarrierCommand.php) to update an existing carrier and [`SetCarrierRangesCommand`](https://github.com/PrestaShop/PrestaShop/blob/develop/src/Core/Domain/Carrier/Command/SetCarrierRangesCommand.php) to set the carrier ranges.

{{% /notice %}}


## The flow

### General settings

When you enter the page, first thing you will notice is the `General settings` tab, where you can set the carrier name, logo, tracking URL, etc.

{{< figure src="./img/general-settings-tab.png" title="General settings tab" >}}

The definition of this form can be found in
[src/PrestaShopBundle/Form/Admin/Improve/Shipping/Carrier/GeneralSettings.php](https://github.com/PrestaShop/PrestaShop/blob/develop/src/PrestaShopBundle/Form/Admin/Improve/Shipping/Carrier/GeneralSettings.php).

### Shipping locations & costs

This tab allows you to set the carrier zones, countries, prices, free shipping, etc.

{{< figure src="./img/shipping-locations-and-costs-tab.png" title="Shipping locations and costs tab" >}}

The definition of this form can be found in [src/PrestaShopBundle/Form/Admin/Improve/Shipping/Carrier/ShippingLocationsAndCostsType.php](https://github.com/PrestaShop/PrestaShop/blob/develop/src/PrestaShopBundle/Form/Admin/Improve/Shipping/Carrier/ShippingLocationsAndCostsType.php).

All the behavior of this tab is managed by `carrier-form-manager.ts` file, that is located in [admin-dev/themes/new-theme/js/pages/carrier/form/carrier-form-manager.ts](https://github.com/PrestaShop/PrestaShop/blob/develop/admin-dev/themes/new-theme/js/pages/carrier/form/carrier-form-manager.ts).

When you click on the `Edit ranges` button, this modal is showing:

{{< figure src="./img/carrier-ranges-modal.png" title="Carrier ranges modal" >}}

This modal is a VueJs component `CarrierRangesType`, that is defined in [src/PrestaShopBundle/Form/Admin/Improve/Shipping/Carrier/Type/CarrierRangesType.php](https://github.com/PrestaShop/PrestaShop/blob/develop/src/PrestaShopBundle/Form/Admin/Improve/Shipping/Carrier/Type/CarrierRangesType.php) and in [admin-dev/themes/new-theme/js/pages/carrier/form/components/CarrierRangesModal.vue](https://github.com/PrestaShop/PrestaShop/blob/develop/admin-dev/themes/new-theme/js/pages/carrier/form/components/CarrierRangesModal.vue).

In function of ranges and zones selected, the user can input the price for each range by zone for this carrier:

{{< figure src="./img/carrier-zones-prices.png" title="Prices" >}}

### Size and weight

This tab allows you to set the carrier size and weight restrictions.

{{< figure src="./img/size-and-weight-tab.png" title="Size and weight tab" >}}

The definition of this form can be found in [src/PrestaShopBundle/Form/Admin/Improve/Shipping/Carrier/SizeWeightSettings.php](https://github.com/PrestaShop/PrestaShop/blob/develop/src/PrestaShopBundle/Form/Admin/Improve/Shipping/Carrier/SizeWeightSettings.php).


