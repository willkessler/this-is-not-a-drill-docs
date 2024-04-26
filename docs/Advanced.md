---
title: Advanced Configuration
sidebar_label: Advanced Configuration
sidebar_position: 1
---

You can pass the following parameters when instantiating a `TinadComponent` in your pages.

| Parameter  | Type         | Purpose |
|------------|--------------|----------|
| mode       | string       | One of : `toast` or `modal` or `inline`|
| template   | JSX fragment | Format you want to use for inline notifications.|
| pageId     | string       | Name the page where you have invoked the component. Only notifications either set to that specific page, or with the page not set, will show up on this page|
| toastProps | object       | Configuration parameters for toasts only |
| dismiss | Function | You can pass a custom callback for when end users dismiss a modal. |

:::tip About toast properties TINAD uses
[`react-toastify`](https://www.npmjs.com/package/react-toastify) to
serve toasts by passing a `toastProps` parameter. This object can home
some or all of these properties.

You can set these values on your toasts:

* `position` (top-left, bottom-right, etc)
* `autoClose` (true/false)
* `autoCloseTime` (ms)
* `hideProgressBar` (true/false)
* `rtl` (true/false)
* `theme` (light/dark)
* `transition` (e.g. Bounce, Slide)

by passing in an object for the `toastProps`.
:::

### Custom inline toast JSX fragment

Here's an example you can re-use or roll your own. Note that this
receives a variable, `tinadContent` that contains the contents of the
notification.  It also receives `tinadType` which provides the type of
the notification.

```tsx title="customInline.tsx"
const DefaultTemplate: React.FC<TinadTemplateProps> = ({ tinadContent, tinadType, dismiss }) => {
    return (
      <div style={{ padding: '20px', backgroundColor: 'white', boxShadow: '0 0 10px rgba(0,0,0,0.1)', width: '100%', borderRadius:'10px' }}>
        <div style={{ marginBottom: '10px' }}>{tinadContent}</div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        {dismiss && <button onClick={dismiss} className={modalClasses.dismiss}>Dismiss</button>}
        </div>
      </div>
    );
};

<TinadComponent mode="inline" template={CustomTemplate} />

```
### Hook Methods

TINAD's `useTinadSDK` hook exposes these functions to you.

| Function                    | Purpose                                                                                                                                                                                                                                                                                                |
|-----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `getTinadConfig()`          | Retrieve TINAD's current configuration. This is maintained in local storage.                                                                                                                                                                                                                           |
| `updateTinadConfig()`       | Update TINAD's configuration. You can send just a few properties to update. Available properies are: `apiKey:string`, `apiBaseUrl:string` (normally set to https://api.this-is-not-a-drill.com), `userId` (string), `pageId` (string), `environments` (array of strings), `domains` (array of strings) |
| `fetchPending()`            | Retrieve all (current) notifications that have not yet been displayed to the end user. TINAD displays current notifications in reverse order of creation.                                                                                                                                              |
| `fetchError()`              | Retrieve last error flagged when fetching notifications.                                                                                                                                                                                                                                               |
| `dismissNotificationCore()` | The dismiss notification function. Normally you will not need to access this.                                                                                                                                                                                                                          |
| `resetAllViewsCore()`       | If you need to reset all views on all notifications you can call this function. Not valid for production environment-targeted notifications.                                                                                                                                                           |

Additionally, TINAD's `useTinadSDK` hook exposes these types to you.

| Type               | Purpose                                                                                                                                                                                                                                              |
|-----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `SDKProviderProps` | Contains the JSX children of the provider, and optionally, `domains` set for the provider (string), environments set for the provider (string), `pollingInterval` (integer) and `skipPolling` (boolean), which configure the poller's frequency      |
| `SDKNotification`  | Definition of a single notification's properties. For details see the [types.ts](https://github.com/willkessler/this-is-not-a-drill/blob/7f57c4df4d3bf4279119b76a1c99b8ffb1d57148/packages/sdk/react-core/src/types.ts#L28) file in the github repo. |


### Polling Configuration

TINAD uses a polling mechanism (rather than a push mechanism) to
ensure the current notifications get shown to end users in a timely
manner.  When you place the SDKProvider, you can pass one of two
special parameters:

1. `pollingFrequency`: Set this value to how frequently you want the
   SDK to poll for new notifications, in ms. (Default: 10
   seconds). You can make this higher (less frequent updates) if
   you're concerned about performance.
1. `skipPolling`: This is useful if you do NOT wish the SDK to poll at all. This is useful for certain testing situations.

:::tip About the SDK Polling Procedure
The poller is smart enough not to poll when a tab is not focused. It has a backoff policy in case the network disconnects.
:::
