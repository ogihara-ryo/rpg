import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { NewGame } from './NewGame'
import { navigate } from '../utils/Navigate'

export const Home = () => (
  <NewGameLink />
);

const NewGameLink = () => (
  <button onClick={() => navigate(NewGame)}>NEW GAME</button>
);
