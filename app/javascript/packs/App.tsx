import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Header } from './pages/layouts/Header'
import { Footer } from './pages/layouts/Footer'
import { Home } from './pages/Home'

const App = () => {
  return(
    <React.Fragment>
      <Header />
      <div id="main">
        <Home />
      </div>
      <Footer />
    </React.Fragment>
  )
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
});
