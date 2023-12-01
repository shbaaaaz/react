// Inserting HTML element in DOM using Vanilla JS

// const title = 'React Bible'
// const root = document.getElementById('root')
// const mainHeading = document.createElement('h1')
// mainHeading.innerText = title
// root.appendChild(mainHeading)

// Inserting React element in DOM using React and ReactDOM

const reactHeading = React.createElement(
  'h1',
  { id: 'react-heading' },
  'This is a react element'
)
const main = React.createElement('main', { id: 'main' }, reactHeading)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(main)
