
import React from 'react';
import "./App.css"

let states = [ "AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO" ];

const renderStates = () =>{

}

class App extends React.Component{
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: false,
      onInputChange: callback
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

    handleChange = ({target: { name, value}}) => {
      this.setState({
        [name]: value
      })
   
    }
  

  render() {
    return(
      <div>
       
       <fieldset className='personal-info'>
       <legend>Personal Information </legend>
        <label htmlFor="name">Nome</label>
        <input type="text" name="name" id="name" maxLength="40" onChange={this.handleChange}></input>
        <label htmlFor="email">email</label>
        <input type="text"  name="email" id="email" maxLength="50" onChange={this.handleChange}></input>
        <label htmlFor="cpf">CPF</label>
        <input type="number"  name="cpf" id="cpf" maxLength="11" onChange={this.handleChange}></input>
        <label htmlFor="adress">Endereco</label>
        <input type="number"  name="adress" id="adress" maxLength="200 onChange={this.handleChange}"></input>
        <label htmlFor="city">CIdade</label>
        <input type="number"  name="city" id="city" maxLength="28" onChange={this.handleChange}></input>
        <label htmlFor="state">Estado</label>
        <input type="number"  name="state" id="state" maxLength="28" onChange={this.handleChange}></input>
        <label htmlFor="state">Moradia</label>
        casa
        <input type="radio"  name="house" id="house" value="house" onChange={this.handleChange}></input>
        apartamento
        <input type="radio"  name="house" id="house" value="apartment"onChange={this.handleChange} ></input>
       </fieldset>
       <fieldset>
         <legend>Professional Info</legend>
         <label htmlFor="resumee">Resumo do Curriculo</label>
         <textarea  name="resumee" id="resumee" maxLength="1000" onChange={this.handleChange}></textarea>
         <label htmlFor="job">Cargo</label>
         <input type="text"  name="job" id="job" maxLength="40" onChange={this.handleChange}></input>
         <label htmlFor="jobDescription">Descricao do cargo</label>
         <textarea type="text-area"  name="jobDescription" id="jobDescription" maxLength="500" onChange={this.handleChange}></textarea>

       </fieldset>
      </div>
    )
  }
};


export default App;
