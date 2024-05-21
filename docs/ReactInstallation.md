---
title: Installation in a React Application
sidebar_label: React Installation
sidebar_position: 3
---
#### Installation methods

It's easy to integrate **This Is Not A Drill!** (TINAD) in your React
application, or in any other application. You can use the React SDK,
or use the REST API and roll your own
**[Backend-for-Frontend (BFF)](https://medium.com/mobilepeople/backend-for-frontend-pattern-why-you-need-to-know-it-46f94ce420b0)**
that connects to our API.

#### Before you integrate: _Sign up!_

You'll need to sign up for an account (if you haven't already), just click Signup from our **[Home Page](https://this-is-not-a-drill)**.

Next, from the dashboard, create a development API key for use with
the SDK. (Eventually you'll also want to generate a production API
key.)

<a href="https://app.this-is-not-a-drill.com/settings/app-config"><img src="/img/apiKeyCreation.png" width="900"/></a>

### Installing in your React App

Installing TINAD in your code base is accomplished in two easy steps:

#### Step 1. Add the official TINAD React library:

Using `npm`:
```
npm install --save @this-is-not-a-drill/react-core @this-is-not-a-drill/react-ui
```
Using `yarn`:
```
yarn add @this-is-not-a-drill/react-core @this-is-not-a-drill/react-ui
```

#### Step 2. Initialize the SDK and insert TINAD tags into your React application's pages


In your `main.tsx` or as high in the component tree as possible, wrap your tree in the SDK Provider, similar to this example:

```tsx title="src/main.tsx"
import { TinadSDKProvider } from '@this-is-not-a-drill/react-core';
...
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <TinadSDKProvider environments="Development">
        <App />
      </TinadSDKProvider>
  </React.StrictMode>
)
```

:::tip Environments
> _Note, that the in the above TinadSDKProvider instantiation, we
> limit the notifications that can be served to only those marked for
> a "Development" environment. You probably want to pass an
> environment variable to the TinadSDKProvider that indicates the
> environment where your app is being deployed._
:::

Next, in your `App.tsx`, or as soon as you have acquired a unique user
id (e.g. after an end user authorizes in your application), initialize the
Tinad SDK with your unique end user's ID and your API key:

```tsx title="src/components/App.tsx"
import { useTinadSDK } from '@this-is-not-a-drill/react-core';

const App = () => {
  // Get the SDK's intialization function from the hook.
  const { updateTinadConfig } = useTinadSDK();

  const tinadConfig = { 
    // Set your Tinad API key.
    apiKey: import.meta.env.VITE_TINAD_API_KEY,

    // Set your unique end-user's id.
    userId: import.meta.env.VITE_ENDUSER_ID,
  };

  // Now update the SDK with your configuration.
  updateTinadConfig(tinadConfig);

};

export default App;
```


Lastly, in any page where you want notifications to be rendered,
simply render the component.

```tsx title="src/components/MyComponent.tsx"
import { TinadComponent } from '@this-is-not-a-drill/react-ui';

export const MyComponent = () => {
    return (
      ... any JSX,  as needed ...
      <TinadComponent mode="toast" />
      ... any more JSX as needed ...
    );
}

export default MyComponent;
```

:::tip Advanced Configuration
_See the Advanced Configuration for more options for how you
can configure how the TINAD component displays to end users._
