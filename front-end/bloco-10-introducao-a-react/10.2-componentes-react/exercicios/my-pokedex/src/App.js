import React from 'react';
import pokemons from "./data"
import Pokedex from './Pokedex';

import "./App.css"
import "./index.css"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Pokedex</h1>
        <Pokedex pokemon={pokemons}/>
      </div>
    )
  }
  
  }
  
  export default App;
