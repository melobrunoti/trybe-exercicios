import logo from './logo.svg';
import './App.css';

function handleClick1(){
  console.log('clicou no botao 1')
}

function handleClick2(){
  console.log('clicou no botao 2')
}

function handleClick3(){
  console.log('clicou no botao 3')
}

function App() {
  return (
    <div className="App">
      <button onClick={handleClick1}>Button - 1</button>
      <button onClick={handleClick2}>Button - 2</button>
      <button onClick={handleClick3}>Button - 3</button>
    </div>
  );
}

export default App;
