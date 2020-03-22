import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { NewGame } from './NewGame'

export const Home = () => (
  <NewGameLink />
);

const NewGameLink = () => (
  <button onClick={toNewGamePage}>NEW GAME</button>
);

const toNewGamePage = () => {
  ReactDOM.render(
    <NewGame />,
    document.getElementById('main'),
  )
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.getElementById('main'),
  )
});
