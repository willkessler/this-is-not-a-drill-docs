---
title: Dashboard Usage
sidebar_label: Dashboard Usage
sidebar_position: 1
---

### Notifications Management

#### Creating notifications

Just click Create a new notification to start a new notification. 

##### Basic usage:

* You must enter some content to display in the notification, but all other fields are set to sensible defaults or optional.
* You can set a start date and time, an end date and time, or both. If you set just the start time, the notification will be shown to users after that time. If you set just the end time, the notification will be shown to users only until that end time.
* If you are in another timezone than PDT, you can set it here. The application will remember your timezone for future notifications.

<img src="/img/newNotif.png" />

##### Advanced options:

* **Page ID** : When you render the TINAD component in your application's pages, you can specify a page ID, e.g. `Payment`. Then, notifications with that page ID will be shown only on that page and no other.
* **Environments** : When you set up your TINAD SDK provider, you can
  specify the running environment(s). Then for each notification, you
  can choose which environments it will show up for. This is helpful
  for testing out notifications in non-production environments.
* **Domains**: Similarly, you can target notifications to specific
  domains. Again, the domains can be specified when you set up your
  SDK Provider. For example, suppose you want to use TINAD on
  `www.example1.com` and `www.example2.com`. When you set up those
  domains in your TINAD configuration screen, then those domain
  choices will appear here when creating a new notification.

<img src="/img/advancedConfig.png" />


* **Dismissal**: By default, notifications must be actively dismissed
  by an end user in order not to be shown again when they return to
  the page where they were viewed. If you uncheck this box, then this
  notification will never be shown again after it is shown once. Note
  that for toasts, if they are configured to hide after a short time
  (the default), then normally they will be dismissed automatically
  when the system hides them.

#### Activating a notification (taking it live)

By default, notifications are not "on". You must click the switch in
the Active column to turn them on. This is an extra safeguard to
prevent you from accidentally displaying a notification to your end
users before it's ready.  You can also target the notification to a development
environment first, before editing and adding the Production
environment, as an additional safeguard.

<img src="/img/golive.png" />

#### Other Notifications Controls

<img src="/img/otherControls.png" />

##### Notification creation info

Hover over the (i) icon under the notification to learn more about who created it and when.

##### Previewing notifications

There are three previews you can try for any notification: modal,
toast, and banner. These are not exact representations of what the SDK
will render but they are close and will give you an idea of how the
notification will look to end users while you're configuring it.

##### Editing notifications

You can edit any notification by clicking the pencil icon when you hover over the notification.

##### Reset views & notification stats

* You can reset the views on any notification here. If any end users have already seen this notification, doing this means they will see it again.
* Notification Stats: coming soon!


##### Deleting a notification

The trash icon allows you to delete a notification. There is no undo!
But you will be warned first of this fact and must confirm.

<img src="/img/deleting.png" />
