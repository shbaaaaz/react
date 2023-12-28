# Chapter 7

## What is the order of life cycle method calls in Class Based Components?

- constructor()
- render()
- componentDidMount()
- componentDidUpdate()
- componentWillUnmount()

### In case of nested components:

- Parent constructor()
- Parent render()
- Child 1 constructor()
- Child 1 render()
- Child 2 constructor()
- Child 2 render()
- Child 1 componentDidMount()
- Child 2 componentDidMount()
- Parent componentDidMount()

## Why do we use componentDidMount?

Its is lifecycle method in a class based component and we can use to perform any action in this method after the initial render of a component. For example: Making an api call.

## Why do we use componentWillUnmount? Show with example

componentWillUnmount() method is used to perform cleanup tasks before the component unmounts.
For example: clearing the timer, aborting network request.

```javascript
import React, { Component } from 'react'

class ExampleComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // ... your component state
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log('Component did mount')
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    // Render component UI
    return <div>{/* ... */}</div>
  }
}

export default ExampleComponent
```

## Why do we use `super(props)` in constructor?

In JavaScript, the super keyword is used to call the parent class's constructor. In the context of a React component, which is a class that extends React.Component, calling `super(props)` is necessary in the constructor to ensure that the component is properly initialized and that the base class's constructor is called.

Here's why we use super(props) in the constructor of a React component:

**Access to this:** When we extend a class in JavaScript, we create a subclass that inherits from the parent class. The `super(props)` call is required to call the constructor of the parent class (React.Component in the case of React components). This is important because the parent class might perform essential setup and initialization, and you want to make sure that it is executed before any code in the subclass's constructor.

**Passing props:** In a React component, the props object contains the properties passed to the component. By calling `super(props)`, you are passing the props to the constructor of the parent class. This is important because the base React.Component class needs access to the props in order to properly initialize the component state and other internal properties.

## Why can't we have the callback function of useEffect async?

useEffect is intended to work with the component lifecycle, and React relies on synchronous execution to handle the setup and cleanup of effects. If the useEffect callback is asynchronous, it might not behave as expected in terms of when the effect is applied and cleaned up.
