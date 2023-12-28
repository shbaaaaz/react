# Chapter 7

## Q. What is SPA?

SPA stands for single page application where the entire UI is compiled into a single page but only the necessary data is visible at a point of time. It can be configured to show and hide data based on the URL routing to make it feel like multi page application.

### Benefits of SPA:

**Dynamic Content Loading**: SPAs use AJAX (Asynchronous JavaScript and XML) or modern JavaScript frameworks (like React, Angular, or Vue.js) to fetch data from a server and update specific parts of the webpage dynamically without refreshing the entire page.

**Enhanced User Experience**: Since SPAs only load the required content, they tend to provide a faster and smoother user experience compared to traditional multi-page applications. The navigation feels more seamless because the transitions occur within the same page.

**Better Performance**: SPAs reduce the amount of data transferred between the client and server, as they typically retrieve only the necessary data instead of entire HTML pages. This optimization can lead to faster load times and improved performance.

**Separation of Concerns**: They enable a clear separation between the frontend and backend development, allowing for more flexibility and modularity in the development process.

## What are various ways to add images into react App? Explain with code examples?

In a React app, there are several ways to add images. Here are a few common methods:

### Importing Images directly in JavaScript/JSX:

```javascript
// Importing the image
import myImage from './path/to/image.jpg'

// In your component
function MyComponent() {
  return (
    <div>
      <img src={myImage} alt='My Image' />
    </div>
  )
}
```

### Using the public folder:

```javascript
function MyComponent() {
  return (
    <div>
      <img src='/path/to/image.jpg' alt='My Image' />
    </div>
  )
}
```

### Inline Data URIs:

```javascript
const imageDataUri = 'data:image/png;base64,iVB...'

function MyComponent() {
  return (
    <div>
      <img src={imageDataUri} alt='My Image' />
    </div>
  )
}
```

### CSS background images:

```javascript
import './MyComponent.css'

function MyComponent() {
  return <div className='my-component'>Hello World</div>
}
```

```css
/* MyComponent.css */
.my-component {
  background-image: url('./path/to/image.jpg');
  /* Other styles */
}
```

## What would happen if we do console.log(useState())?

If you use console.log(useState()), you would see an array with two elements logged to the console. The useState function in React returns an array with two elements:

The current state value.
A function that allows you to update the state.

## How will useEffect behave if we don't add a dependency array?

If you don't provide a dependency array (the second argument) to the useEffect hook, it will run the effect after every render. This means that the effect will be executed on the initial render and after every subsequent render.

## What is difference between Client Side Routing and Server Side Routing?

### Client-Side Routing:

- In client-side routing, the navigation and rendering of content are handled on the client side (in the browser).
- When a user clicks on a link or enters a URL, JavaScript running in the browser updates the UI by fetching and rendering the necessary components without a full page reload.
- Commonly used in single-page applications (SPAs) where the initial HTML page is loaded, and subsequent changes are managed dynamically.
- Generally provides a smoother user experience after the initial page load since only the necessary components are updated without full page reloads.
- May lead to faster transitions between pages once the initial resources are loaded.
- Traditional SPAs may face SEO challenges because search engine crawlers may not execute JavaScript, leading to potential indexing issues.

### Server-Side Routing:

- In server-side routing, the navigation and rendering are handled by the server.
- When a user requests a new page, the server processes the request, generates the HTML for the entire page, and sends it to the client.
- Each navigation typically triggers a full page reload.
- Each navigation triggers a request to the server, leading to a full page reload.
- Initial page loads might be slower, especially for complex applications, because the server needs to generate and send the entire HTML for each page.
- Typically provides better SEO out of the box because the server generates complete HTML pages that are easily indexed by search engines.
