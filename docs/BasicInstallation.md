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
inline toasts. Your snippet may look like this:

```
//
// AUTO-GENERATED SCRIPT TAG
// The configuration controls at left
// update the script tag below.
// To go live, simply embed a snippet like this
// (along your API key) on your site/app.
//

<script
  id="tinad-sdk"
  src="https://unpkg.com/@this-is-not-a-drill/vanillajs-sdk@latest/dist/bundle.js"
  defer
  tinad-configuration=
'{
  "api": {
    "displayMode": "inline",
    "endpoint": "https://demo-api.this-is-not-a-drill.com",
    "key": "Fy05RL7F",
    "environments": [
      "Development"
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
1. Remove the comments at the top (`AUTO GENERATED SCRIPT TAG` etc)
2. Replace the demo key `Fy05RL7F` with your development key
3. Replace the `endpoint` with the production endpoint (`https://api.this-is-not-a-drill.com`).
5. Paste the snippet into your website's pages HEAD and publish.

For instance, if your development key was `ABC123`, you should end up with a snippet like this:

```
<script
  id="tinad-sdk"
  src="https://unpkg.com/@this-is-not-a-drill/vanillajs-sdk@latest/dist/bundle.js"
  defer
  tinad-configuration=
'{
  "api": {
    "displayMode": "inline",
    "endpoint": "https://api.this-is-not-a-drill.com",
    "key": "ABC123",
    "environments": [
      "Development"
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


:::tip
Script snippets can safely be positioned in the <code>HEAD</code>
section of your pages, because the `defer` keyword on the snippet will
prevent the snippet from slowing down your site in any way.
:::

### What do I do next?

You're all set to send notifications to your users! The next thing
you'll want to do is set up some notifications to be sent.

See the next section for details on how to do this.
