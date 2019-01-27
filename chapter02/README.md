# Chapter 02. Understanding Vue.js

Vue.js is a flexible and powerful open-source framework for developing **client-side applications**

## Should I Use Vue.js?

- Vue.js delivers the kind of functionality that used to be available only to native application developers and makes it available entirely in the browser. This puts a lot of demand on the browser
- The demand of work takes time to perform, which depends on
  - the complexity of the Vue.js application
  - the quality of the browser
  - the processing capability of the device
- The goal, therefore, is to perform initial setup of Vue.js as infrequently as possible and deliver as much of the app as possible to the user when it is performed
- Two kinds of web application: **round-trip** and **single-page**

### Understanding Round-Trip Applications

#### Model

- The browser requests an initial HTML document from the server
- User interactions -- such as clicking a link or submitting a form -- led the browser to request and receive a completely new HTML document
- the browser is essentially a rending engine for HTML content, and **all of the application logic and data resides on the server**

#### Drawbacks

- **make the user wait** while the next HTML document is requested and loaded
- **require a large server-side infrastructure** to process all the requests and manage all the application state
- **consume more bandwidth** because each HTML document has to be self-contained, which can lead to the same content being included in each response from the server

> Vue.js is not well-suited to round-trip applications

### Understanding Single-Page Applications

#### Model

- An initial HTML document is sent to the browser
- User interactions lead to Ajax requests for small fragments of HTML or data inserted into the existing set of elements being displayed to the user
- The initial HTML document is never reloaded or replaced
- Users can continue to interact with the existing HTML while the Ajax requests are being performed asynchronously, even if that just means seeing a "data loading" message.

#### Understanding Server-Side Rendering

- Server-side rendering (known as SSR) relates to SPAs, and
  - intends to make web applications respond more quickly when the user first navigates to a URL
  - allows search engines to better index web application content
- SSR **uses Node.js as a server-side JavaScript runtime** to execute the web application on the server to produce the content that is presented to the user
- Applications must take care not to rely on the available-on-browser-only features or APIs
- These difficulties and limitations mean that SSR is not suitable for most Vue.js projects and should be approached with caution

#### Understanding Application Complexity

- For a simple and self-contained problem, we should use the browser APIs directly, starting with the Document Object Model (DOM) API
- The drawback of the browser APIs, especially the DOM API, is that
  - they can be awkward to work with
  - older browsers tend to implement features differently
- `jQuery` is a good alternative to working directly with the browser APIs, especially for older browsers
- Vue.js come into play for complex projects with
  - complex workflows to implement
  - different types of user to deal with
  - large amounts of data to be processed
- Vue.js helps to maintain the robustness of the codebase

## What Do I Need to Know?

Basic knowledge of

- HTML
- CSS
- JavaScript

## How Do I Set Up My Development Environment?

By `@vue/cli`

## Example Code

In github repository https://github.com/Apress/pro-vue-js-2
