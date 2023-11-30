# Notes

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

## Q. Can we write the script tag pointing to out JS file before the React CDN links?

The CDN link should be loaded before the custom JS file, because the code inside the JS file is using React and ReactDOM and if we use them before they are loaded, it won't work.

## Q. What is crossorigin in the script tag?

## Q. Why there are different React CDN links for development and production?

> `root.render()` replaces the root's innerHTML with the react element passed inside it.
