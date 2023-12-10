# Chapter 5

## Q. What is the difference between Named Export, Default Export and \* as export?

**Named Export**: These exports allow you to export multiple functions, variables, or classes from a single module. Each exported entity is explicitly named and can be imported individually by their respective names in other files using the same names.

```javascript
// Module file exporting named entities
export const func1 = () => {
  /* function logic */
}
export const func2 = () => {
  /* function logic */
}
```

```javascript
import { func1, func2 } from './moduleFile'
```

**Default Export**: This allows you to export only one functionality per module as the default export. There can be only one default export in a module. When importing, you can give it any name you want.

```javascript
// Module file exporting a default entity
const defaultFunc = () => {
  /* function logic */
}
export default defaultFunc
```

```javascript
import anyNameYouWant from './moduleFile'
```

**Export All (\* as export)**: This exports all named exports from a module as properties of an object. It allows importing all the exports using a single import statement with a specified namespace or alias.

```javascript
// Module file exporting all named entities as an object
export const func1 = () => {
  /* function logic */
}
export const func2 = () => {
  /* function logic */
}
```

```javascript
import * as allFunctions from './moduleFile'
// Usage: allFunctions.func1(), allFunctions.func2()
```

## Q. What is the importance of config.js file?

config.js file can be used to store application wide settings or configurations and can be reused without the need of being hardocoded and it is easy to change the setting at one place that will be reflected to all the other places as well.
It provides a clean way of writing and maintaining the code and makes the application very easy to deal and scale with.

## Q. What are React Hooks?

React hooks are nothing but utility functions provided by the react team to perform specific function. It abstract away the actual implementation and prvides important features making the approach declarative.

for eg. useState() hook is nothing but a function that takes an optional argument and returns the value referred as state and a function that can be used to change the state. It is a convention to put 'use' in the hooks so that they can be identified as hooks.

## Q. Why do we need a useState Hook?

useState hook is used to create and update a state within a component. Since a state change triggers a component re-render in react, it can not directly mutated rather there is a specific way in which react expect it to be updated so that it can be considered as a state update and trigger the component rerender.
useState hook gives that function which can be used to set the state.

```javascript
const [state, setState] = useState(0)
```

Here useState hook takes an argument and returns a state and a callback function setState that can be used to update the state. The argument passes inside the hook is gonna be the initial value of the state.

To update the state we can just pass the new value to setState like below:

```javascript
setState(10)
```
