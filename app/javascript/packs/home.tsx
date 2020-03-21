import * as React from 'react'
import * as ReactDOM from 'react-dom'

const Home = () => (
  <div>NEW GAME</div>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.getElementById('root'),
  )
})
