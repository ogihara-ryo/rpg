import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Header } from './pages/layouts/Header'
import { Footer } from './pages/layouts/Footer'
import { Home } from './pages/Home'

const App = () => {
  return(
    <div id="root">
      <Header />
      <div id="main">
        <Home />
      </div>
      <Footer />
    </div>
  )
}

document.addEventListener('turbolinks:load', () => {
  ReactDOM.render(
    <App />,
    document.getElementById('container')
  )
});
