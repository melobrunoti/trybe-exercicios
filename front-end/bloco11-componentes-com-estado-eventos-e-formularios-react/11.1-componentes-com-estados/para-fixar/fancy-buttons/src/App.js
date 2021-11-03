import './App.css';
import React from 'react';


class App extends React.Component {
  constructor(){
    super()
    this.handleClick1 = this.handleClick1.bind(this)
  }

 handleClick1(){
    console.log(this);
    console.log('clicou no botao 1')
  }

  render(){
  return (
    <div className="App">
      <button onClick={this.handleClick1}>Button - 1</button>

    </div>
  );
}
}

export default App;
