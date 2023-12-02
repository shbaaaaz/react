import React from 'react'
import ReactDOM from 'react-dom/client'

const name = 'Shahbaz'
const jsxHeading = <h1>Hey {name}, Welcome to React A to Z</h1>

console.log(jsxHeading)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(jsxHeading)
