import React from 'react'
import ReactDOM from 'react-dom/client'

const reactHeading = React.createElement(
  'h1',
  { id: 'react-heading' },
  'This is a react element'
)
const main = React.createElement('main', { id: 'main' }, reactHeading)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(main)
