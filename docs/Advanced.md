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

:::tip About toast properties
TINAD uses [`react-toastify`](https://www.npmjs.com/package/react-toastify) to serve toasts. 

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

### Other parameters

When you place the SDKProvider, you can pass one of two special parameters:

1. `pollingFrequency`: Set this value to how frequently you want the
   SDK to poll for new notifications, in ms. (Default: 10
   seconds). You can make this higher (less frequent updates) if
   you're concerned about performance.
1. `skipPolling`: This is useful if you do NOT wish the SDK to poll at all. This is useful for certain testing situations.

### About the SDK Polling Procedure

The poller is smart enough not to poll when a tab is not focused. It has a backoff policy in case the network disconnects.
