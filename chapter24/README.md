# Chapter 24. Advanced URL Routing

## Preparing for This Chapter

1. start the web service

```bash
yarn json
```

2. start the development tools

```bash
yarn serve
```

## Using Separate Files for Related Routes

- Additional JavaScript files can be used to group related routes, which can then be imported into the main routing configuration (as Listing 24-5)

## Guarding Routes

- Navigation guards control access to routes
- They can respond to an attempt at navigation by
  - redirecting it to another URL
  - canceling the navigation completely

### Defining Global Navigation Guards

- Global navigation guards are methods defined as part of the routing configuration
- They are used to control access to all of the routes in the application
- 3 Global Navigation Guard Methods

  |            Name | Description                                                                                                   |
  | --------------: | :------------------------------------------------------------------------------------------------------------ |
  |    `beforeEach` | called before the active route is changed                                                                     |
  |     `afterEach` | called after the active route is changed                                                                      |
  | `beforeResolve` | similar to `beforeEach`, but it is called after all the route-specific and component guards have been checked |

- The global route guards

  - the most flexible type of guard because they can be used to intercept all navigation
  - but awkward to set up

- Each of these methods is called on the VueRouter object and accepts a function that is invoked during navigation, parameters of which go as

  | Parameter | Description          |
  | --------: | :------------------- |
  |      `to` | the destinated route |
  |    `from` | the route to leave   |
  |    `next` | detailed as follows  |

  - Uses of the Next Function for Navigation Guards

    |       Method Use | Description                             |
    | ---------------: | :-------------------------------------- |
    |         `next()` | proceed the navigation                  |
    |    `next(false)` | cancel the nagivation                   |
    |      `next(url)` | redirect to `url`                       |
    |   `next(object)` | select route by name                    |
    | `next(callback)` | used only along with `beforeRouteEnter` |

> You must remember to call the next function in your guards. There can be multiple guards defined in an application, and they won't be invoked if you forget to call the function, which can lead to unexpected results.

#### Redirecting the Navigation Request to Another URL

> When there are multiple global guard functions, they are executed in the order in which they are > passed to the beforeEach or beforeAfter method

> A redirection request in a route guard will start and invoke all of the guard functions again. For this reason, it is important not to create a redirection loop where two guard functions cause the application to bounce between the same two URLs.

#### Redirecting to a Named Route

- pass an object that has a `name` property to the `next` function

### Defining Route-Specific Guards

- The only one-guard method available for use directly in routes is `beforeEnter`

#### Understanding Guard Ordering

- The global route guards are executed before the route-specific ones
- When a guard performs a redirection
  - the processing of the current route change is abandoned
  - a new navigation begins, meaning
    - any guards that would be executed after the one that performs the redirection won't be able to inspect the request
- The global `beforeResolve` method is executed after all the other types of guard
  - a useful way to define a global guard as a final check after the route-specific guards have been checked
  - in real projects, this would be a useful change to make only if there were a set of URLs for which the route-specific guard would not intercept

### Defining Component Route Guards

- 3 methods
  - `beforeRouteEnter`
    - called before confirming the component that has been selected by the target route
    - used to control access to routes **before they lead to components being created**
  - `beforeRouteUpdate`
    - called when the route change will reuse the current component
  - `beforeRouteLeave`
    - called when the application is about to navigate away from the route selecting the current component

#### Accessing the Component in the `beforeRouteEnter`

- The `beforeRouteEnter` method is invoked before the component is created, making the `this` pointer unavailable at that time
- To address this limitation, the `next` function in `beforeRouteEnter` can be passed a function that
  - will be invoked once the component has been created
  - receives the component object as its argument
- Usage: `beforeRouteEnter` allows for navigation to be canceled before the component is created

## Loading Components on Demand

- When using URL routing, **only the basic lazy loading feature is supported**, and the configuration options, such as loading or delay, are ignored

### Displaying a Component Loading Message

- Use case: loading lazily loaded component
- The `$store` object available only in components, and access to the data store is available through an `import` statement in the rest of the application

> use the `onError` method defined by the VueRouter object to register a callback function that will be invoked when there is a problem

### Hiding the Outgoing Component During Loading

- use the `v-show` (but not `v-if`) directive if you want to hide the old component while waiting for the new one to be loaded

## Creating Routing-Free Components

- Vue Router includes support for providing prop values to components as part of its route configuration
- Props are passed to a component using a `props` property when defining the route
- 3 different ways

  - the prop value is entirely independent of the route and will always be set to the same value

    ```js
    { path: "/hello", component: MessageDisplay, props: { message: "Hello, Adam"}},
    ```

  - use the values of the path's dynamic segment to set the prop value. The `props` value can be assigned a function that receives the current route as its parameter and returns an object containing the props value

    ```js
    { path: "/hello/:text", component: MessageDisplay, props: (route) => ({ message: `Hello, ${route.params.text}`})},
    ```

  - set the props value to true, and dynamic segment to the same name as the properties of `props`
    ```js
    { path: "/message/:message", component: MessageDisplay, props: true}
    ```
