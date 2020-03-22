import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { NewGame } from './newGame'

const Home = () => (
  <NewGameLink />
);

const NewGameLink = () => (
  <button onClick={toNewGamePage}>NEW GAME</button>
);

const toNewGamePage = () => {
  ReactDOM.render(
    <NewGame />,
    document.getElementById('root'),
  )
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.getElementById('root'),
  )
});
