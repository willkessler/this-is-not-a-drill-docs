---
title: Intro & Installation
sidebar_label: Intro & Installation
sidebar_position: 2
---

## What is _This Is Not A Drill!_ ?

Have you ever launched an brand-new application, and suddenly realized:

_"Oh no, we forgot we have to tell users we're going down for backups, this Sunday at 10pm!"_

Studies have shown that of all the various modern communication
channels, announcements that appear __inside applications__ when you
have the __user's full attention__ are far and away the most effective.

With __This Is Not A Drill!__, you're covered. Once you install, it
becomes easy to send impromptu or scheduled announcements to your
users in a variety of display formats. Installation will take you just
a few minutes.

Some typical use cases are:

| Purpose           | Example                                                                               |
|-------------------|---------------------------------------------------------------------------------------|
| Feature updates   | _You can now submit documents from our brand new Legal Documents Portal!_             |
| Service slowdowns | _Bank services are currently delayed due to the upcoming federal holiday._            |
| Interruptions     | _We'll be down for automated backups between 1-2am PST Sunday May 31st._              |
| New T&C's         | _Please review the T&C's on the following page carefully, as our terms have changed._ |
| Age check         | _You need to be at least 18 to enter this section._                                   |
| Cookie alerts     | _SuperService uses cookes to track user's preferences. Please indicate this is OK._   |


----

For a real-world, visual example, here's a notification recently seen on a popular
video recording service, Loom. This type of notification could have easily be
inserted using __This Is Not A Drill!__ (instead of deploying application-specific code).

<div style={{textAlign:'center', margin:'70px 0 70px 0' }}><img src="/img/loom_example.png"/></div>

### We care about your users

__This Is Not A Drill!__ tracks which users have gotten which notification, so users never have to dismiss an announcement they've 
already seen. (Users get pretty annoyed by that!).  You can also get a report in case you need to explain _which_ users were informed, and when.

Privacy is core to the TINAD's design. We don't collect any PII
(personally identifiable information) about your users, relying
instead on an anonymous ID that you provide us (or we generate) to
prevent repeat notifications.

:::tip
Throughout this documentation, we may refer to This Is Not A Drill! by a shorter acronym, __TINAD__. 
:::


## Before you install: Sign Up

You'll need to sign up for an account with TINAD (if you haven't already). 
Just click __Signup__ from our **[Home Page](https://this-is-not-a-drill)**.

Signing up will put you immediately into the dashboard. 

## Integration using the Javascript snippet

We've provided a utility/demo you can use to point and click your way
to an integration Javascript snippet. Just head on over to our <b><a
href="https://vanillajs.this-is-not-a-drill.com"
target="_blank">snippet configurator utility/demo</a></b>.

Using the Configurator, you can experiment with different ways to
display your notifications (toasts, popup modals, inline
notifications, banners) as well as make any visual customizations you
need via custom CSS. 

The <code>snippet.js</code> file created by the
configurator can then be easily copied onto your clipboard and pasted
into your website.

<a href="https://vanillajs.this-is-not-a-drill.com" target="_blank"><img src="/img/configurator1.png" /></a>

----


Once you have configured TINAD's notifications display the way you
want, just click the copy icon next to the `snippet.js` filename
to copy the snippet to your computer's clipboard.

<img src="/img/capturingSnippet.png" />

----
For instance, suppose you decide to get started with very simple
inline toasts. Your copied snippet will look something like this:

```
<script
  id="tinad-sdk"
  src="https://unpkg.com/@this-is-not-a-drill/vanillajs-sdk@latest/dist/bundle.js"
  defer
  tinad-configuration=
'{
  "api": {
    "displayMode": "inline",
    "endpoint": "https://demo-api.this-is-not-a-drill.com",
    "key": "<YOUR_API_KEY>",
    "environments": [
      "Development",
      "Staging", 
      "Production"
    ],
    "domains": []
  },
  "inline": {
    "target": {
      "useDefaults": true
    },
    "show": {
      "confirm": true,
      "dismiss": true
    }
  }
}'
>
```

----

### Adding your API key to the Javascript snippet

To install TINAD using this snippet, let's get an API key.

Enter the <a href="dashboard.this-is-not-a-drill.com"
target="_blank">__dashboard__</a> and navigate to __Account__ /
__Configuration__. Next, click to generate a new development or
production API key.

<a href="https://app.this-is-not-a-drill.com/settings/app-config"><img src="/img/apiKeyCreation.png" width="900"/></a>

<br /><br /> Once you've copied your API key to your clipboard,
replace `<YOUR_API_KEY>` with your actual API key. 

Paste the snippet into your website's <code>HEAD</code>
section, and publish your changes.


:::tip
Script snippets can safely be positioned in the <code>HEAD</code>
section of your pages, because the `defer` keyword on the snippet will
prevent the snippet from slowing down your site in any way.
:::

### Granting service access to the snippet

For security, __This Is Not A Drill!__ checks where requests with your
public API key originate, against a list of URLs you provide. Before
notifications can begin to appear on your sites, you'll need to add their
URL's in the TINAD dashboard.

To accomplish this, log into the <a
    href="dashboard.this-is-not-a-drill.com" target="_blank">__TINAD dashboard__</a>
and navigate to __Account__ / __Configuration__ .  Then enter your
domain(s) in the Web Domains box as indicated in the screenshot
below. (Make sure to hit __Save changes__ when done!)

<img src="/img/WebSiteURLs.png" />

<br /><br /><br />

## Integration using `npm` or `yarn`

It's easy to integrate in most javascript/typescript web application
platforms, assuming they use the `npm` repository.

A simple example of how to integrate using `npm/yarn` is located in our <strong><a
href="https://github.com/willkessler/this-is-not-a-drill-basic-example"
target="_blank">example github repo.</a></strong>

The basic steps are:

1. Install the SDK with:

```
npm i @this-is-not-a-drill/vanillajs-sdk
 -- or --
yarn add @this-is-not-a-drill/vanillajs-sdk
```

2. Configure the TINAD SDK to run on any pages where you want to show notifications:

```
import { 
  configureTinad, 
  generateDefaultConfiguration, 
  getCurrentConfiguration, 
  SDKConfiguration
} from '@this-is-not-a-drill/vanillajs-sdk';

const newConfig = generateDefaultConfiguration(); // Get a sensible initial configuration.
newConfig.api.key = '<YOUR_API_KEY>';             // Set your API key (from the dashboard)
configureTinad(newConfig);                        // Update and restart the SDK with your settings.

```


:::tip
You can call `configureTinad()` at any time to reconfigure how
the SDK operates. This can be useful in SPA apps where you want to
display notifications differently based upon user navigation. For
intance, suppose you want to tell TINAD that the user is looking at a
different page than they were before navigating. Let's say the page
they were visiting was the `home` page, and now they're vising the
`my_account` page.  Simply get the current configuration:

```
const currentConfig = getCurrentConfiguration();
```

Set the `api.pages` property in the configuration you get back, to
contain the page (or pages) you want to filter notifications on:

```
currentConfig.api.pages = ['my_account']; // usually you'll just provide a single page name here.
```

and then call `configureTinad()` with your updated configuration:

```
configureTinad(currentConfig);
```

Now the SDK will only display notifications tagged with the page Id: `my_account` (or 
untagged notifications, which are shown on all pages by default).
:::

### Updating the SDK's behavior

When calling `configureTinad()`, you can update any of the properties
of the `SDKConfiguration` object to control how the SDK behaves.  

Here is the type definition of the `SDKConfiguration` object:

```
export interface SDKConfiguration {
  api: {
    displayMode : string;         // One of 'toast', 'inline', 'modal', or 'banner'.
    userId?: string | undefined;  // Provide your unique end-user id here or just rely on TINAD autogenerated user ids.
    key?: string;                 // Your API key goes here.
    endpoint: string;             // Normally, the default value 'https://api.this-is-not-a-drill.com' is all you need here.
    environments?: string[];      // Return only notifications tagged for one of environments (e.g. 'development').
    domains?: string[];           // Return only notifications tagged one of these domains.
    pages?: string[];             // Return only notifications tagged for one of these page ids.
    dismissFunction?: (notificationUuid:string) => Promise<void>;  // (internal use only)
    currentNotificationUuid?: string;                              // (internal use only)
  };
  toast?: {                       // Include this property when displaying notifications as 'toast's (temporary popups).

                                  // The position must be one of:
                                  //  'top', 'top-left, 'top-right',
                                  //  'center', 'center-left, 'center-right,
                                  //  'bottom', 'bottom-left, 'bottom-right'.
    position?: string;
    duration?: number;            // How long the toast shows (in milliseconds).
    progressBar?: boolean;        // Does the toast show a progress bar?
    useCustomClasses?: boolean;   // Whether you want to use custom style classes.
  };
  modal?: {                       // Inclue this property when displaying notifications as 'modal's.
    confirmButtonLabel? : string; // if showing a confirm button, what does it say
    useCustomClasses?: boolean;   // if you want to use custom style classes
    show?: {                      // Note that if both of these are false, end-users CANNOT dismiss a modal! (you don't want this)
      confirm: boolean;           // Whether to show a confirm ("OK") button.
      dismiss: boolean;           // Whether to show a dismiss ("x") icon.
    },
  };
  inline?: {                      // Include this property when displaying notifications INLINED in the web page.
    target: {
      useDefaults?: boolean;      // Whether to use default target classes.
      outer?: string;             // If custom classes, what is the class of the outer div for the notification?
      content?: string;           // If custom classes, what is the class of the content div for the notification?
      confirm?: string;           // If custom classes, what is the class of the confirm button for the notification?
      dismiss?: string;           // If custom classes, what is the class of the dismiss icon for the notification?
    },
    show?: {                      // Note that if both of these fields are false, end-users cannot dismiss an inline notification. Sometimes, that's what you want.
      confirm: boolean;           // Show the confirm button?
      dismiss: boolean;           // Show the dismiss button?
    },
  };
  banner?: {                      // Include this property when displaying notifications as banners.
    duration?: number;            // How long the banner is displayed (milliseconds).
    target: {
      useDefaults?:boolean;       // Whether to use default target classes.
      outer?: string;             // If using custom classes, what is the class of the outer div for the banner notification?
      slideDown?: string;         // If using custom classes, what is the slideDown (animation) class for the banner notification?
      slideUp?: string;           // If using custom classes, what is the slideUp (animation) class for the banner notification?
      content?: string;           // If using custom classes, what is the class of the content div for the banner notification?
      dismiss?: string;           // If using custom classes, what is the class of the dismiss icon div for the banner notification?
    },
    show?: {
      dismiss?: boolean;          // Whether to show the "dismiss" (x) icon on the banner.
    },
  };
};
```

## Customizing the notification visually (styling)

Whether you install the SDK via the embeddable js snippet, or use `npm/yarn`, you can style the notifications to better suit your site's visuals. Here's how.

For toast notifications, set the `toast.useCustomClasses` property to `true` (see above).




## You're all set!

You've done all you need to send notifications to your users! The next thing
you'll want to do is actually set up some notifications to go out.

See the next section, __Using the Dashboard__, for details on how to do this.

:::tip

By default, the snippet is set to receive notifications on multiple
environments.  If you only have a single (production) website, you can
change the line in the `environments` section of the snippet to only
include your production environment.

```
    "environments": [
      "Production",
    ],
```

_When you create notifications in the dashboard, you can
identify each notification to target specific environments and not others.
This makes it possible to test TINAD out in development environments._
:::
