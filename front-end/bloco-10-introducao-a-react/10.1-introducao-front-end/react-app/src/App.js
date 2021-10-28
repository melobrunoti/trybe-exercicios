import logo from './logo.svg';
import './App.css';
import React from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['Estudar', 'Farmar', 'Upar']
class App extends React.Component  {
  render (){
    return(
      <ul>{tasks.map((task => Task(task)))}</ul>
   );
  }
}

export default App;
