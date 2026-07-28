---
title: "Adding a new Core hook"
url: "https://devdocs.prestashop-project.org/8/development/components/hook/register-new-hook/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/development/components/hook/register-new-hook.md"
---


# How to add a new Core Hook

{{% notice warning %}}
This page describes how to add a new Core hook for the selected Core version. If you wish to add a new Core hook for another PrestaShop version, make sure to select the right version.
{{% /notice %}}

Although hooks are automatically created the first time they are subscribed to, new hooks added to the Core itself need to be properly registered and documented.

Here are the steps you need to follow.

{{% notice note %}}
If you wish to share your new hook with us, but are not sure how to proceed, you can read the [Contribute: Adding a new Core hook]({{< relref "../../../contribute/contribute-pull-requests/add_hook" >}}) guide.
{{% /notice %}}

## 1. Dispatch the new hook

The very first step is just to dispatch the new hook wherever you need it, as explained in [Dispatching a Hook]({{< relref "dispatching-hook" >}}).

## 2. Update the Hooks definition file

All known hooks are registered in the `ps_hook` database table. This table is populated with Core hooks during the installation, by reading the `install-dev/data/xml/hook.xml` file, then during runtime every time a new hook is used.

Having Core hooks registered is important for two main reasons. First, every hook registered in database will be displayed in the Hook debugger, so it will help developers figure out which hooks are available on a given page. Second, known hooks are displayed in the Positions page, allowing to transplant modules from one hook into another (this is especially useful for display hooks). 

Each hook has a name, a title and a definition. They are identified by an additional id attribute in XML, which is the same as its name.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<entity_hook>
  <fields id="name">
    <field name="name"/>
    <field name="title"/>
    <field name="description"/>
  </fields>
  <entities>
    <hook id="actionMaintenancePageFormSave">
      <name>actionMaintenancePageFormSave</name>
      <title>Processing Maintenance page form</title>
      <description>This hook is called when the Maintenance Page form is processed</description>
    </hook>
    <hook id="...">
      ...
    </hook>
  </entities>
</entity_hook>
</xml>
```

Add new hooks at the bottom of the list, as hooks are registered sequentially.

Here is an example of [Pull Request][example-pr-add-hook-xml] registering a new hook.

### How to choose a name for this new hook

The hook naming convention is `type` followed by `location` or `target`. `Type` can be `display` or `action` .

The name of the hook must be useful. It should either help a developer understand where this hook is dispatched or what the hook aims to do. Depending on the usecase you should choose the 1st or 2nd option.

Here are some examples:
- `displayMaintenance`: this hook name was chosen to indicate where it is displayed (on maintenance page)
- `actionUpdateQuantity`: this hook name was chosen to indicate when it is dispatched
- `actionCustomerGridDataModifier`: this hook was chosen to indicate what it should be used for
- `displayAdminGridTableBefore`: this hook name was chosen to indicate where it is displayed

{{% notice tip %}}
Remember that hook names are global – choose your hook names carefully to reduce risks of collision with other modules or future Core hooks.
{{% /notice %}}

## 3. Prepare database update for shop upgrades

The previous step only adds the hook to _new_ shops. We also need to register the hook to shops that upgrade from a previous version.

The last step is to insert the new hooks in the `ps_hooks` table using the upgrade system. Locate the X.Y.Z.sql file that refers to the PrestaShop version that will include your change: for instance, if the release expected to include this change is `1.7.5.0`, locate that file in the `upgrade/sql` folder from the [Update assistant](https://github.com/PrestaShop/autoupgrade) module.

{{% notice tip %}}
This process is explained here: [Structure and content upgrades]({{< ref "/8/development/database/structure.md#structure-and-content-upgrades" >}})
{{% /notice %}}

Once you have located the file, add the corresponding SQL commands to add new hooks:

```sql
INSERT IGNORE INTO `PREFIX_hook` (`name`, `title`, `description`) VALUES
  ('displayAdministrationPageForm', 'Manage Administration Page form fields', 'This hook adds, update or remove fields of the Administration Page form'),
  ('actionMaintenancePageFormSave', 'Processing Maintenance page form', 'This hook is called when the Maintenance Page form is processed');
```

You can also use a [helper](https://github.com/PrestaShop/autoupgrade/pull/577/files) available to add a new hook during the upgrade process for a given version.

If you wish to test your changes, follow [this page][autoupgrade-install] to install the autoupgrade module.

[example-pr-add-hook-xml]: https://github.com/PrestaShop/PrestaShop/pull/34431/files#diff-83f4085b0cf6d3684a214fdffee7ec16b2f967d60a2674a7d4a536a2898eee26
[autoupgrade-install]: {{< ref "/8/basics/keeping-up-to-date/use-autoupgrade-module.md" >}}

