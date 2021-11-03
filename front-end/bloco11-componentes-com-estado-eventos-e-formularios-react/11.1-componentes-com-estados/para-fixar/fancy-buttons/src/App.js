import './App.css';
import React from 'react';


class App extends React.Component {
  constructor(){
    super()

    this.handleClick1 = this.handleClick1.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)

    this.state = {
      numeroDeCliques: 0,
      numeroDeCliques2: 0
    }
  }

 handleClick1(){
    this.setState((estadoAtual, _props)=>({
      numeroDeCliques: estadoAtual.numeroDeCliques + 1
    }))
  }

  handleClick2(){
    this.setState((estadoAtual, _props)=>({
      numeroDeCliques2:   estadoAtual.numeroDeCliques2 + 1
    }))
  }

  render(){
  return (
    <div className="App">
      <button onClick={this.handleClick1}>{this.state.numeroDeCliques}</button>
      <button onClick={this.handleClick2}>{this.state.numeroDeCliques2}</button>
    </div>
  );
}
}

export default App;
