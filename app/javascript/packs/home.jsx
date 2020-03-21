import React from 'react'
import ReactDOM from 'react-dom'

const Home = props => (
  <div>NEW GAME</div>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.getElementById('root'),
  )
})
