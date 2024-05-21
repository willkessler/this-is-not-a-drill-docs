---
title: Installation in any website
sidebar_label: Basic Installation
sidebar_position: 2
---

:::tip
Throughout this documentation, we sometimes refer to This Is Not A Drill! by a shorter acronym, __TINAD__. 
:::

### Before you integrate: _Sign up!_

You'll need to sign up for an account with TINAD (if you haven't already). 
Just click Signup from our **[Home Page](https://this-is-not-a-drill)**.

Signing up will put you immediately into the dashboard. 

From there, create a development API key for use with the
SDK. (Eventually you'll also want to generate a production API key.)

<a href="https://app.this-is-not-a-drill.com/settings/app-config"><img src="/img/apiKeyCreation.png" width="900"/></a>

### Integrating using a javascript snippet

It's easy to integrate **This Is Not A Drill!** (TINAD) into any
website. Like many website services, you just need to insert small
snippet of javascript into your web pages to set things up.

To start with, head on over to our <b><a href="https://vanillajs.this-is-not-a-drill.com" target="_blank">snippet configurator utility</a></b>.

<a href="https://vanillajs.this-is-not-a-drill.com" target="_blank"><img src="/img/configurator1.png" /></a>

----

Using the configurator, you can experiment with different ways to
display your notifications (toasts, popup modals, inline
notifications, banners) as well as make any visual customizations you
need via custom CSS. The <code>snippet.js</code> file created by the
configurator can then be easily copied onto your clipboard and pasted
into your website.

Once you have configured TINAD's notifications display the way you
want them, just click the copy icon next to the `snippet.js` filename
to copy the snippet to your computer's clipboard.

<img src="/img/capturingSnippet.png" />

For instance, suppose you decide to get started with very simple
inline toasts. Your snippet will look something like this:

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

To install TINAD using this snippet:

1. Copy the snippet with the copy button as described above.
2. Paste your development key to replace `<YOUR_API_KEY>`;
5. Paste the snippet into your website's pages HEAD, and publish your changes.

:::tip
Script snippets can safely be positioned in the <code>HEAD</code>
section of your pages, because the `defer` keyword on the snippet will
prevent the snippet from slowing down your site in any way.
:::

### What should I do next?

You're all set to send notifications to your users! The next thing
you'll want to do is set up some notifications to be sent.

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
