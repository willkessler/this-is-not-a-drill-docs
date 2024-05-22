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
have the user's __full focus__ are far and away the most effective.

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
inserted using __This Is Not A Drill!__ instead of writing special application code.

<img src="/img/loom_example.png"/>

:::tip
Throughout this documentation, we may refer to This Is Not A Drill! by a shorter acronym, __TINAD__. 
:::

### We care about your users

__This Is Not A Drill!__ tracks which users have gotten which notification, so users never have to dismiss an announcement they've 
already seen. (Users get pretty annoyed by that!).  You can also get a report in case you need to explain _which_ users were informed, and when.

Privacy is core to the TINAD's design. We don't collect any PII
(personally identifiable information) about your users, relying
instead on an anonymous ID that you provide us (or we generate) to
prevent repeat notifications.


## Before you install: _Sign up!_

You'll need to sign up for an account with TINAD (if you haven't already). 
Just click Signup from our **[Home Page](https://this-is-not-a-drill)**.

Signing up will put you immediately into the dashboard. 

### Integration with the Javascript snippet

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

Before the snippet can begin serving notifications on your site, you
must grant access to your site's URL(s).

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

### All set!

You're all set to send notifications to your users! The next thing
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
