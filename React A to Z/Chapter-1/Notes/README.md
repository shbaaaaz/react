# Notes

## Q. What is Emmet?

Emmet is a toolkit used to speed up the development process, It usually comes as a plugin or extension which allows us to write shorthand of code which then is converted into a fully fledged code structure.

## Q. What is the difference between library and framework?

Library is nothing but a reusable piece of code that has been bundled into a package to perform certain action. It abstracts away the actual implementation and simply used to perform a specific task.
Frameworks on the other hand provide comprehensive structure and guidelines for building application.

**Example**: React is a library and Angular is a framework since React can be used in any project just by installing it, Angular provides the entire configuration, structure and has certain guidelines to be followed.

## Q. What is content delivery network (CDN)? How do they work?

A CDN is a network of servers strategically distributed across various geographical locations. These servers work collectively to deliver web content—such as images, videos, scripts, and stylesheets—to users, aiming to minimize latency and improve performance.

### How do CDNs Work?

Imagine a library with a vast collection of books, located in a central city. People from different towns need these books regularly. Instead of everyone traveling to the library, copies of popular books are placed in smaller libraries across different towns. When someone needs a book, they can easily access it from the nearby library instead of traveling to the central one. CDNs operate similarly.

**Content Distribution:** When a user requests to access a website, the CDN selects the server closest to the user's location. This server holds cached copies of static content like images, videos, and scripts. By serving content from a nearby server, the distance data needs to travel is reduced, resulting in faster load times.

**Caching:** CDNs cache content temporarily. This means frequently accessed content is stored in these servers, reducing the load on the origin server. Cached content is updated regularly to ensure users receive the most recent version of the website.

**Load Balancing:** During traffic spikes or high demand, CDNs distribute the load among multiple servers, preventing server overload. This ensures websites remain accessible and responsive even during peak times.

### Benefits of CDNs:

**Improved Performance:** Reduced latency leads to faster loading times, enhancing user experience and engagement.

**Enhanced Reliability:** CDNs offer redundancy and failover mechanisms, ensuring websites remain accessible even if one server encounters issues.

**Global Reach:** They enable seamless content delivery worldwide, irrespective of users' geographical locations.

## Q. Why is React known as React?

The name "React" signifies the library's primary purpose and approach: reacting to changes in data or state and efficiently updating the user interface, making it a fitting and descriptive name for the library.

## Q. Can we write the script tag pointing to out JS file before the React CDN links?

The CDN link should be loaded before the custom JS file, because the code inside the JS file is using React and ReactDOM and if we use them before they are loaded, it won't work.

## Q. What is crossorigin attribute in the script tag?

When the script is fetched from a different origin (domain, protocol etc.) than the one where it is hosted, the browser enforces a secuirty policy called the same origin policy. This policy can restrict scripts from accessing data or interacting with resources from a different origin for security reasons.

The crossorigin attribute in the `<script>` tag is used to specify how the browser should handle the loading of a script when the script is fetched from a different origin (i.e., a different domain, protocol, or port) than the one where the web page is hosted.

When you include a script from a different origin, the browser enforces a security policy called the Same-Origin Policy. This policy restricts scripts from accessing data or interacting with resources from a different origin for security reasons.

The crossorigin attribute can take different values:

**Anonymous:** This is the default value. If the crossorigin attribute is set to "anonymous," the script is fetched without sending any user credentials (like cookies or HTTP authentication) along with the request. This setting is suitable when you're loading resources from a different origin that doesn't require credentials for access.

```
<script src="https://example.com/script.js" crossorigin="anonymous"></script>
```

**Use Credentials:** When the crossorigin attribute is set to "use-credentials," the browser will include user credentials (such as cookies or HTTP authentication) with the request when fetching the script. This setting is used when the server hosting the script requires authentication for access.

```
<script src="https://example.com/script.js" crossorigin="use-credentials"></script>
```

## Q. What is the difference between React and ReactDOM?

React is the core library for building the react components and using its powerful features whereas ReactDOM is the bridge between React and the browser. Browser doesn't understand React, ReactDOM handles the DOM manipulation and rendering the component on the DOM.

> `root.render()` replaces the root's innerHTML with the react element passed inside it.

## Q. Why there are different React CDN links for development and production?

The CDN links for development are not minified and includes developer friendly and helpful warning, error messages which makes the file size bigger whereas the production links are minified and do not include these helpers due to which the size is smaller and they load faster.

## Q. What is the difference between async and defer?

"Async" and "defer" attributes can be used in the `<script>` tag to delay its load and execution.

While rendering an HTML file, when a `<script>` tag is encountered, HTML parsing gets paused, and the JS file is downloaded from the network and executed first. After this, the HTML parsing resumes, potentially leading to slow page load. To avoid that, we could either use "async" or "defer" in the `<script>` tag.

Async: If used in the `<script>` tag, it fetches the script file from the network asynchronously while parsing the HTML. However, it pauses the rendering for executing the script.

Defer: If used in the `<script>` tag, it fetches the script file from the network asynchronously and waits for the HTML rendering to be completed. It then executes the script, allowing the HTML parsing to proceed uninterrupted, resulting in faster page load times.
