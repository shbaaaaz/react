# Chapter 9

## When and why do we need lazy()?

`lazy()` is required for code splitting or chunking (dynamic bundling) to reduce the size of our bundle. With lazy loading, we can exclude the functionality/component from the main bundle and import it only when required.

## What is suspense?

Suspense is a component provided by react for that can be added as a wrapper to the lazy loaded component and provide fallback component so that meanwhile the component is being downloaded from the network, the fallback component can be displayed to the UI.

## Why we got this error : A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition? How does suspense fix this error?

We receive this error when we try to implement lazy loading without suspense because the component is fetched from the network only when it needs to be rendered, however it takes sometime to download and meanwhile the component is not avaliable. So the component needs to be wrapped inside a suspense with a fallbakc UI to avoid this error.

## Advantages and disadvantages of using this code splitting pattern?

Code splitting, or lazy loading, is a technique used in React to improve the performance of your application by splitting the JavaScript bundle into smaller chunks. This allows you to load only the code that is necessary for the current view or functionality, reducing the initial load time and improving user experience. Here are the advantages and disadvantages of using code splitting in React:

### Advantages

**Faster Initial Load Times:**
By loading only the essential code for the initial view, you reduce the time it takes for the application to load, making it faster for users to see and interact with the initial content.

**Improved Page Responsiveness:**
Smaller initial bundles mean quicker downloads, resulting in faster rendering and improved perceived performance. This can enhance the overall responsiveness of your application.

**Optimized Bandwidth Usage:**
Lazy loading helps in optimizing bandwidth usage, as users only download the code needed for the current view. This is particularly beneficial for users on slower networks or with limited data plans.

**Better Resource Utilization:**
Code splitting allows you to distribute resources more efficiently, loading only what is needed at a given moment. This can lead to better resource utilization and a more efficient use of memory.

**Facilitates Caching:**
Smaller bundles are more likely to be cached by the browser, leading to quicker subsequent visits to your application.

**Easier Maintenance:**
Code splitting can make it easier to manage and maintain your codebase, especially in larger applications with numerous components. It helps in organizing and loading code on demand.

### Disadvantages

**SEO Implications:**
Lazy loading might have implications for search engine optimization (SEO), as search engines may not index content that is loaded dynamically

**Potential for Loading Delays:**
While lazy loading improves initial load times, it can introduce delays when components need to be loaded on demand. Users may experience a short delay when navigating to a new section of the application as the required code is fetched.
