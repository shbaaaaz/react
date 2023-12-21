# Chapter 4

## Q. Is JSX mandatory for React?

No, JSX is not mandatory as at the end of the day JSX code also gets transpiled into React elements however it makes it very easy to write to create components and write the markup and logic together. So, JSX is highly recommended.

## Q. Is ES6 mandatory for React?

ES6 is not mandatory but it's highly recommended and widely used in React development due to its powerful features and improvements over previous versions of JavaScript.

React itself doesn't require ES6 to function, as it's just a JavaScript library and can be used with older versions of JavaScript. However, using ES6 features and syntax can greatly enhance the development experience and make the code more readable, concise, and maintainable.

## Q. How can I write comments in JSX?

We can write comments in JSX like we do in JavaScript. We can use // for single line comment and /\* \*/ for multi-line comments.

## Q. What is `<React.Fragment></React.Fragment>` and `<></>` ?

`<React.Fragment></React.Fragment>` is used to group multiple elements together without creating any extra node / element. Since react component can return a single root JSX, it is mostly used to group multiple elements without adding any unnecessary tag. `<></>` is the shorthand for React.Fragment.

## Q. What is Virtual DOM?

Virtual DOM is a replica of the real dom maintained by React. Since Updating the real DOM is a costly operation, React uses a virtual DOM to perform the updates efficiently.

React creates virtual DOM as a copy of the actual DOM, whenever there is an update in a component, a new virtual DOM is created, React compares the difference between the newly created virtual DOM and the older one using an algorithm called 'diffing'.

After spotting the difference react runs a Reconciliation process to update the only thing in real DOM that needs to be updated.

React also batches the changes to reduce the number of time the update needs to be done. This way React optimizes the DOM update and makes the application faster.

## Q. What is Reconciliation?

Reconciliation in React refers to the process of efficiently updating the Real DOM by identifying the differences between the old and new Virtual DOM representations and applying the necessary changes to reflect the updated UI state or props. This process is fundamental to React's ability to provide efficient and performant UI updates in web applications.

## Q. What is React fiber?

React fiber is an algorithm that is used for the reconciliation process in order to efficiently perform the DOM updates and render the UI.

This is a complete rewrite of the reconciliation process, to improve the performance using

- **Prioritization and Scheduling**: It allows React to pause, abort, or prioritize certain updates, making the UI more responsive and allowing better control over rendering.

- **Asynchronous Rendering**: Fiber enables React to support asynchronous rendering. It breaks the rendering work into smaller chunks (fibers), allowing interruptions for higher-priority tasks like user interactions or animations without blocking the main thread.

- **Incremental Rendering**: With Fiber, React can perform incremental rendering, where it can work on parts of the UI incrementally, interweaving rendering work with other tasks, instead of completing the entire rendering in one go.

- **Better User Experience**: By implementing Fiber, React aims to improve the overall user experience by reducing jank (stuttering) and making applications more responsive, especially when dealing with heavy computations or frequent UI updates.

## Which algorithm was used before react fiber and how react fiber is different?

The old reconciliation algorithm is called Stack Reconsiliation.

###React Fiber vs. Stack Reconciliation Algorithm:

**Stack Reconciliation (Previous Algorithm)**:

**Synchronous Rendering**:

**_Approach_**: Stack Reconciliation worked synchronously, updating the entire component tree in a single go whenever there were changes to state or props.

**_Potential Issue_**: This synchronous nature could lead to longer main thread blocking, especially in complex component hierarchies or with frequent updates, causing performance issues and affecting UI responsiveness.
No Prioritization or Interruption:

**_Handling Updates_**: Stack Reconciliation didn’t have built-in support for interrupting or prioritizing updates.

**_Impact_**: High-priority tasks (e.g., user interactions) couldn't interrupt ongoing rendering updates, leading to potential UI lag or delays in responsiveness.

**React Fiber (Current Implementation)**:

**Asynchronous Rendering**:

**_Approach_**: React Fiber introduced asynchronous rendering, breaking work into smaller units (fibers) that can be paused, interrupted, or resumed, enabling smoother UI interactions.

**_Benefit_**: Allows React to perform work in chunks, prioritizing and interrupting rendering to maintain a responsive user experience.
Priority and Scheduling:

**Priority and Scheduling**:

**_Prioritization_**: Fiber introduces priority-based scheduling, allowing React to prioritize high-priority updates (e.g., user interactions or animations) over less critical tasks.

**_Enhanced Control_**: This feature ensures that crucial tasks get executed first, preventing UI lag and improving perceived performance.

**Incremental Updates:**

**_Approach_**: React Fiber supports incremental rendering, enabling updates to be processed incrementally instead of completing the entire tree in one go.

**_Advantage_**: Allows React to interleave rendering work with other tasks, enhancing responsiveness and reducing the duration of main thread blocking.

**Summary**:
Stack Reconciliation relied on synchronous updates, potentially causing performance issues and longer main thread blocking.
React Fiber introduced asynchronous rendering, priority-based scheduling, and incremental updates to improve performance, responsiveness, and control over rendering, especially in complex and highly interactive UIs.

## Q. Why we need keys in React? When do we need keys in React?

We need keys while using array.map to iterate through an array of elements and render the UI, in order to distinguish each element so that React can uniquely identify each elements and make update in only the necessary node whenever required.

## Q. Can we use index as keys in React?

No, use of index is discouraged by the react team as it may lead to unexpected behavious in case the order of the elements can change however it can be used if there is no unique key at all. But avoid using it.

## Q. What is props in React?

props can be considered as carrier that is used to pass values from one component to another. In a functional component, prop can be considered as the argument passed to the function.

## Q. What is a Config Driven UI?

A config driven UI is a design approach or architecture where the UI is controlled by a configuration data rather than being hard coded. Consider that your are getting the layout details from the backend API and render the UI based on those specifications.

It can be used to show different UI based on different regions, offers etc.
