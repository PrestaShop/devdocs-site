---
title: "Notifications"
url: "https://devdocs.prestashop-project.org/9/themes/concepts/templates/notifications/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/themes/concepts/templates/notifications.md"
---


# Notifications

PrestaShop provides a notification system to display feedback messages to the customer after actions like form submissions, cart updates, or account changes.

Notifications are available in every template via the `$notifications` variable. They are rendered in a partial included from the layout:

```smarty
{block name='notifications'}
  {include file='_partials/notifications.tpl'}
{/block}
```

You can customize how notifications are displayed by editing `_partials/notifications.tpl`.

## Notification types

| Type | Variable | Typical use |
|------|----------|-------------|
| `success` | `{$notifications.success}` | Action completed |
| `error` | `{$notifications.error}` | Validation failure, processing error |
| `warning` | `{$notifications.warning}` | Non-blocking issue |
| `info` | `{$notifications.info}` | Informational message |

Each type is an array of message strings. If the array is empty, no notification of that type should be displayed.

## Pushing notifications from PHP

On the PHP side, front controllers can add messages to four arrays: `$this->success`, `$this->errors`, `$this->warning`, and `$this->info`. To display them after a redirect, use `$this->redirectWithNotifications()` which stores the messages in the session and clears them once they have been displayed, they are shown once and gone.

