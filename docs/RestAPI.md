---
title: REST API Usage
sidebar_label: REST API Usage
sidebar_position: 3
---

#### Why use the REST API?

Here are some reasons why talking directly to TINAD's API makes sense:

* If you don't want your API key to be visible in your front end for compliance or security reasons.
* You aren't using React on your web application.
* You're building a mobile app that does not use React Native.

Regardless, if you want to integrate using the REST API instead of
using the React SDK, you can refer to the [reference page](/ApiDocs)
on this site, for information on the available REST endpoints. You
should find enough information here to create a BFF architecture and
handle displaying notifications yourself.

#### Connecting with the API endpoints

You will always talk to the API at
**[api.this-is-not-a-drill.com](https://api.this-is-not-a-drill.com).**
The API domain does not change between development and production;
that distinction is made in the environment settings of each
notification.

:::tip

* The single Production API key will only return notifications targeted to the **Production** environment
* Development API keys will only return notifications targeted to **all non-Production** environments
:::

#### Authenticating

With any call to the REST API, you'll need to authenticate with your
chosen API Key.  Make sure you pass these headers to the API:

```
Authorization: Bearer <YourAPIKEY>
Content-Type: application/json
```

You can generate API keys in the **[TINAD
dashboard](https://app.this-is-not-a-drill.com/settings/app-config)**.

* Click **Generate new development key** for a development key. (You can set up more than one).
* Click **Generate new Production API Key** if you're ready to use production notifications.

<a href="https://app.this-is-not-a-drill.com/settings/app-config"><img src="/img/apiKeyCreation.png" /></a>

