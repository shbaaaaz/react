import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'

const Title = () => {
  return (
    <div>
      <h1 className='title'>This is the title</h1>
    </div>
  )
}

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Title />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
