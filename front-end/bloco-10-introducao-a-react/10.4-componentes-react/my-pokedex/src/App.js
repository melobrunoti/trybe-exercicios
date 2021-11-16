import React, { Component } from 'react'
import pokemons from './data'
import './App.css'

export default class App extends Component {

  render() {
    return (
      <div className="container">
        {pokemons.map(({name, type, image, averageWeight})=>(
          <div className="pokesquare">
           <img src={image}></img> 
           <p>{name}</p>
           <p>{type}</p>
           <p>{averageWeight.value} {averageWeight.measurementUnit}</p>
                 
           </div>
        ))}
      </div>
    )
  }
}

