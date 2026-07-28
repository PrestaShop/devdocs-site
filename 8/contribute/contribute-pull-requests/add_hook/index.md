---
title: "Adding a new Core hook"
url: "https://devdocs.prestashop-project.org/8/contribute/contribute-pull-requests/add_hook/"
version: "8"
source: "https://github.com/PrestaShop/docs/blob/8.x/contribute/contribute-pull-requests/add_hook.md"
---

# Adding a new Core hook

{{% notice note %}}
If you wish to add a new hook but are not sure how to proceed, you can read the [Adding a new Core hook]({{< relref "../../development/components/hook/register-new-hook/" >}}) guide.
{{% /notice %}}

Contributing a new hook to PrestaShop is a geat way to extend the software's capabilities, but it requires a few steps to be done properly that we called the "definition of ready".

So, before you start submitting a pull request, make sure you have completed the following steps.

## 1. The `hook.xml` file
Make sure the hook have a clear description in the `hook.xml` file located in the `install-dev/data/xml/` folder.

This description must be clear and concise, and should help developers understand where this hook is dispatched or what the hook aims to do.

```xml {hl_lines=[4]}
<hook id="actionMaintenancePageFormSave">
  <name>actionMaintenancePageFormSave</name>
  <title>Processing Maintenance page form</title>
  <description>This hook is called when the Maintenance Page form is processed</description>
</hook>
```

## 2. Describe how to test the hook

Don't forget to describe how to test the hook in your pull request. This is important for the reviewer to understand how the new hook works and how to test it.

Providing a small test module in your pull request to validate the use case is a good practice, and helps reviewers to validate your new hook faster. 

{{% notice note %}}
If you are not sure how to write a test module, you can read the [Tutorial: Creating your first module]({{< relref "../../modules/creation/tutorial" >}}) and the [Using hooks in modules]({{< relref "../../modules/concepts/hooks#using-hooks" >}}) guides.
{{% /notice %}}

## 3. Trigger UI Tests

When your pull request is ready and submitted, don't forget to trigger the UI auto tests to make sure your new hook doesn't break anything else in PrestaShop.

You can follow the readme file in the [`ga.tests.ui.pr`](https://github.com/prestashop/ga.tests.ui.pr) repository to know how to trigger the UI tests directly on github.

Then, add the url of the UI tests previously launched directly in your pull request description!

## 4. Check the `Hook Contribution` label
We have a specific label for hook contributions, and this label must be added automatically by our bots.

If the `Hook Contribution` label is not automatically added, please mention `@PrestaShop/Committers` in a comment on your pull request if you are part of the PrestaShop team. If you are not part of the team, you can directly mention a committer. You can find the list of committers [here](https://www.prestashop-project.org/project-organization/people-and-roles/#committers).

