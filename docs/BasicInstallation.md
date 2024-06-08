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

Whether you install the SDK via the embeddable js snippet, or use
`npm/yarn`, you can style the notifications to better suit your site's
visuals. Here's how.

### Custom styling toasts

For toast notifications, set the `toast.useCustomClasses` property to
`true` (see above). Then, in your site's pages, add these classes
after you modify them to fit your requirements:

```
.tinad-custom-toast-htmlContainer {
  background-color:light-orange;
  color:white !important; /* !important required */
}

.tinad-custom-toast-container {
  background-color:blue;
  color:white;
}

.tinad-custom-toast-popup {
  background-color:orange !important; /* !important required */
}

.tinad-custom-toast-closeButton {
  background-color: #ff9900;
  color:white;
}

.tinad-custom-toast-timerProgressBar {
  background-color: red;
}

```

### Custom styling modals

For modal notifications, set the `modal.useCustomClasses` property to
`true` (see above). Then, in your site's pages, add these classes
after you modify them to fit your requirements:

```
.tinad-custom-modal-htmlContainer {
   /* these will need !important */
}

.tinad-custom-modal-popup {
  background-color: orange;
  color: #ff6600;
  font-weight:bolder !important;
}

.tinad-custom-modal-title {
  background-color: blue;
}

.tinad-custom-modal-closeButton {
  color: #000 !important;
  background-color: #ff9900;
}

.tinad-custom-modal-confirmButton {
  background-color: #ff6633 !important;
  font-weight: 800;
  min-height:40px;
}
```

### Custom styling of banner notifications

To use custom styled banner notifications, set the
`banner.target.useDefaults` property to `false` (see above). Then,

* Set `banner.target.outer` to the name of the class you wish to style the box containing your banner.
* Set `banner.target.slideDown` to the name of the class you wish to style the slideDown animation for the banner.
* Set `banner.target.slideUp` to the name of the class you wish to style the slideUp animation for the banner.
* Set `banner.target.content` to the name of the class you wish to style the banner's message contents.
* Set `banner.target.dismiss` to the name of the class you wish to style the banner's dismiss control.

Lastly, once you have provided these class names, you should define these classes in your site's pages. You don't have
to put any of the html on the page for the banners themselves; you are just defining custom styling for the elements
that the SDK will insert in the page to create a banner.

Here is an example (the one used in the snippet configurator). Change these values to what designs are best for your site.

```
#my-notification-banner {
  font-family: Arial, Helvetica;
  min-height:75px;
  position: fixed;
  top: 0;
  width: 100%;
  height: auto;
  padding: 10px 0;
  background-color: #9a0;
  color: #fff;
  text-align: center;
  padding: 10px;
  z-index: 10000;
  opacity:55%;
  animation: slideDown 0.25s ease-out forwards; /* Adjust time as needed */
  display: none;
  align-items: center; /* Vertically center items */
  justify-content: center; /* Center content horizontally */
}

#my-notification-banner.slideDown {
  display: flex;  /* Flexbox layout for internal alignment */
  animation: slideDown 0.25s ease-out forwards;
}

#my-notification-banner.slideUp {
  display:flex;
  animation: slideUp 0.25s ease-out forwards;
}

#my-notification-banner .content {
  flex-grow: 1;
  text-align: center;
  padding-right:40px;
}

#my-notification-banner .dismiss {
  position: absolute; /* Absolute position to the upper right */
  top: 10px; /* Adjust for spacing */
  right: 20px; /* Adjust for spacing */
  background: none; /* Remove background styling */
  border: none; /* Remove border styling */
  font-size: 20px; /* Font size for "X" */
  cursor: pointer; /* Pointer cursor for interactivity */
}

#my-notification-banner .dismiss:hover {
  font-weight:800;
  border-radius: 2px;
  border: 1px solid #aaa;
  color: #000;
}
```

### Custom styling of inline notifications

To use custom styled inline notifications, set the
`inline.target.useDefaults` property to `false` (see above). Then,

* Set `inline.target.outer` to the name of the class you wish to style the box containing your banner.
* Set `inline.target.slideDown` to the name of the class you wish to style the slideDown animation for the banner.
* Set `inline.target.slideUp` to the name of the class you wish to style the slideUp animation for the banner.
* Set `inline.target.content` to the name of the class you wish to style the banner's message contents.
* Set `inline.target.dismiss` to the name of the class you wish to style the banner's dismiss control.

Place these elements in your html page where you want the inline notification to appear. The SDK will apply the styles
you named in the configuration to this html.

For instance, you could put this html on your page where you want a notification banner to render:

```
<div className="my-inline-container">
  <div className="my-content"></div>
    <button className="my-confirm">OK</button>
    <div className="my-dismiss">x</div>
  </div>
</div>
```

Then, you'll need to add styles like these to your pages' where the
inline notification should appear:

```
.my-inline-container {
  --light-grey: #D3D3D3;
  --dark-grey: #505050;
  color:#000;
  border:1px solid #aaa;
  border-radius: 4px;
  display:none;
  position:relative;
  padding:20px;
  font-family: Arial, Helvetica;
  width: 100%;
  min-height:90px;
  margin-top:10px;
  margin-bottom:10px;
  background:#999;
}
.my-content {
/* Some options you can test out: */
/* font-style: italic;*/
/*  min-height:50px;*/
}

.my-confirm {
  position:absolute;
  bottom: 10px;
  right:10px;
  background-color: white;
  color: black;
  border-radius: 5px;
  border:1px solid #999;
  padding: 2px 20px 2px 20px;
  cursor: pointer;
  font-size:12px;
}

.my-dismiss {
  color: #fff;
  cursor: pointer;
  border:none;
  padding:2px 4px 2px 4px;
  background: none;
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 16px;
}

.my-dismiss:hover {
  font-weight:800;
  border-radius: 2px;
  border: 1px solid #aaa;
  color: #000;
}

```



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
