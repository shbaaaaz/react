# Chapter 6

## Q. What is a Microservice?

A microservice is a software development approach where applications are built as a collection of small, independent services that work together to form a larger application. Each microservice is designed to perform a specific business function and operates independently, communicating with other services through well-defined APIs.

These services are typically focused on a single task or capability, allowing for easier maintenance, scalability, and flexibility in software development. They can be developed, deployed, and scaled independently, enabling teams to work on different services simultaneously without impacting the entire system.

Microservices architecture promotes modularity, making it easier to update, replace, or add new functionalities without disrupting the entire system. This approach is widely used in modern software development to create complex applications that are more agile, scalable, and easier to maintain compared to monolithic architectures.

## Q. What is Monolith architecture?

Monolithic architecture is a traditional software development approach where an entire application is built as a single, unified and interconnected system. In this architecture, all components, functionalities, and modules of the application are tightly integrated and run as a single unit.

In a monolithic architecture, the entire codebase is typically contained within a single codebase or repository, with different functionalities organized into modules or layers. These modules might include user interface, business logic, database access, and other components, all tightly coupled together.

Modifications or updates to a monolithic application often require changes to the entire system, which can make development and maintenance more challenging as the application grows larger and more complex. Scaling a monolithic application can also be difficult because the entire application needs to be replicated to handle increased load.

## Q. What is the difference between Monolith and Microservice?

### Monolithic Architecture:

**Single Unit**: The entire application is developed as a single, interconnected unit.
**Tightly Coupled**: Components are tightly integrated and interconnected, sharing the same codebase and often the same database.
**Scaling**: Scaling usually involves replicating the entire application, which can be inefficient.
**Development & Deployment**: Simpler initial development and deployment process.
**Maintenance**: Changes or updates may require modifying the entire system, making maintenance challenging as the application grows.

### Microservices Architecture:

**Decentralized Services**: The application is divided into small, independent services, each performing specific functions.
**Loosely Coupled**: Services are loosely connected, communicating via APIs, allowing for independence and flexibility.
**Scaling**: Individual services can be scaled independently, providing more flexibility and efficiency in resource allocation.
**Development & Deployment**: More complex initial setup but allows for easier maintenance and updates as services can be modified independently.
**Maintenance**: Changes to a particular service do not affect the entire system, making maintenance more manageable and enabling faster innovation.

## Q. Why do we need a useEffect Hook?

useEffect Hook provides life cycle management in functional component.
The useEffect hook in React is used to perform side effects in functional components. Side effects refer to any code that interacts with the outside world, such as fetching data, subscribing to events.

Here's why the useEffect hook is essential:

**Lifecycle Management in Functional Components**: In class components, lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` were used to handle side effects. The useEffect hook serves a similar purpose in functional components, allowing developers to manage side effects.

**Handling Side Effects**: It enables developers to perform side effects after every render, mimicking functionalities like component mounting, updating, and unmounting. This is achieved by specifying the dependencies or conditions under which the effect should be triggered.

**Avoiding Infinite Loops**: useEffect allows controlling when the effect should be executed by specifying dependencies. It helps prevent infinite loops by ensuring the effect is triggered only when necessary.

**Cleanup and Unsubscription**: It provides a way to perform cleanup operations or unsubscribe from resources like timers, event listeners, or subscriptions when the component is unmounted or when specific dependencies change.

**Asynchronous Operations**: It supports asynchronous operations, such as data fetching using APIs or performing operations that might take time to complete.

## Q. What is Optional Chaining?

Optional chaining in JavaScript is a feature that allows you to access properties and methods of an object without explicitly validating if each intermediate property exists or is null/undefined. It simplifies accessing deeply nested properties within objects, reducing the need for extensive null or undefined checks.

The optional chaining operator (?.) is used to access properties of an object while automatically checking if each level of the property chain exists. If any intermediate property in the chain is null or undefined, the entire expression short-circuits and evaluates to undefined, preventing errors instead of throwing a TypeError.

```javascript
// Example object
const user = {
  id: 1,
  name: 'Shahbaz',
  address: {
    street: '123 Main St',
    city: 'Berlin',
    // No 'zipcode' property here
  },
}

// Using optional chaining to access nested properties
const zipcode = user.address?.zipcode
// If 'address' or 'zipcode' doesn't exist, 'zipcode' will be undefined

console.log(zipcode) // Output: undefined
```

## Q. What is Shimmer UI?

Shimmer UI is a design pattern used in user interfaces, particularly in applications and websites, to indicate that content is loading or to simulate a loading effect before the actual content is rendered. It's a subtle animation or visual effect that creates the illusion of activity and helps users understand that something is happening in the background.

## Q. What is the difference between JS expression and JS statement?

An expression in JavaScript is a piece of code that produces a value. It can be a single value, a combination of values, variables, operators, and function invocations that ultimately results in a value.

A statement in JavaScript is a complete instruction that performs an action and does not necessarily produce a value. Statements can consist of expressions, keywords, and other elements that perform tasks such as variable declarations, control flow (if, else, switch), loops (for, while), function declarations, etc.

## Q. What is Conditional Rendering, explain with a code example?

In React, conditional rendering is often achieved using JavaScript conditional statements or ternary operators within the component's JSX (JavaScript XML) code.

Example:

```javascript
import React, { useState } from 'react'

const ConditionalRenderingExample = () => {
  // State variable to toggle rendering
  const [showMessage, setShowMessage] = useState(false)

  return (
    <div>
      <button onClick={() => setShowMessage(!showMessage)}>
        Toggle Message
      </button>
      {showMessage ? ( // Using a ternary operator for conditional rendering
        <p>This message is displayed conditionally!</p>
      ) : (
        <p>Click the button to show the message!</p>
      )}
    </div>
  )
}

export default ConditionalRenderingExample
```

## Q. What is CORS?

CORS stands for Cross-Origin Resource Sharing. It is a security feature implemented in web browsers to control and manage how web pages or web applications on different domains interact with each other.

When a web page from one domain (origin) requests resources such as data, APIs, or assets from another domain (different origin), the browser's security policy restricts this interaction for security reasons. CORS is a mechanism that allows servers to specify who can access their resources on a web page from a different origin.

The CORS policy is enforced by browsers and involves the use of HTTP headers to grant or restrict access to resources across different origins. When a browser makes a cross-origin request, it sends an HTTP request with an Origin header indicating the origin of the requesting page. The server can then respond with specific CORS-related headers to allow or deny the request based on configured policies.

### Key CORS-related headers:

**Access-Control-Allow-Origin**: This header is sent by the server in response to a request and specifies which origins are permitted to access the resource. It can contain the requesting origin or a wildcard \* to allow access from any origin.

**Access-Control-Allow-Methods**: Specifies the HTTP methods (e.g., GET, POST, PUT, DELETE) allowed when accessing the resource.

**Access-Control-Allow-Headers**: Indicates which HTTP headers can be used during the actual request.

**Access-Control-Allow-Credentials**: Determines whether the browser should include credentials (e.g., cookies, authorization headers) in the request.

CORS is essential for enabling secure interaction between web pages or applications hosted on different domains while preventing unauthorized access to sensitive data or resources. It helps protect against cross-site request forgery (CSRF) attacks and ensures that resources are shared only with trusted origins that are explicitly allowed by the server.
