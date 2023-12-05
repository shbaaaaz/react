# Chapter 3

## Q. What is JSX?

JSX stands for JavaScript XML, which is a unique markup language developed by the Facebook team which is HTML or XML like markup language but JavaScript can be dynamically injected into it which makes it very easy to build web apps rendering dynamic values by writing markup and logic in a single file.

## Q. React.createElement vs JSX?

React.createElement is used to create a React element however it becomes very difficult to created nested elements using this syntax which is not so developer friendly.
Facebook team developed JSX to write the markup and the logic in a single file which then transpiled into basic JS code by a package called Babel.

## Q. What are the benefits of JSX?

- Declarative syntax
- Component based structure
- Easy to understand
- JS integration in markup

## Q. Behind the scenes of JSX?

JSX is not directly served to the browser since the browser does not understands it, So JSX is actually transpiled by babel into a React element (JS Object which could be created using React.createElement) syntax.

## Q. Where does this Babel come from?

Parcel performs multiple actions while bundling like optimization, minification etc. It uses different packages under the hood to perform such actions. Transpilation is also one of the tasks parcel performs with the help of Babel. So we do not need to explicitly install Babel, since it comes from the transitive dependency.

## Q. What is a component?

A component can be considered as an independent or combination of UI elements. They can be created either by using a JavaScript function or class. Any JS function or class that returns JSX / React Element is a component. React

## Q. What is a functional component?

Function component is nothing but a JS function that returns React element / JSX.

```javascript

// Simple component

const Heading = () => <h1>This is a heading.<h1/>

// Nested component

const Form = () => {
    return (<form>
    <input type='text'>
    <button>Submit</button>
    </form>)
}

```

## Q. What is component composition?

A component can be inserted/called within another component, this is called as component composition. This

Example:

```javascript
const App = () => {
  return (
    <div className='App'>
      <Header />
      <Title />
    </div>
  )
}
```
