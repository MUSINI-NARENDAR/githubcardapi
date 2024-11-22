// import logo from './logo.svg';
import './App.css';
import React , { Component } from 'react';
import GithubCard from './GithubCard';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
        username :'',
    };

  }
  // to update the username
  handleInputChange = (event) =>{
    this.setState({ username: event.target.value });
  };

  handleFormSubmit = (event) =>{
    event.preventDefault();

  };

render(){
  return (
    <div className="App">
      <h1>Github Profile</h1>
      <form onSubmit={this.handleFormSubmit}>
        <input type='text'
        placeholder='enter username'
        value={this.state.username}
        onChange={this.handleInputChange}
        />
        <button type='submit'>Search</button>

      </form>
      {
        this.state.username && (
          <GithubCard username={this.state.username}/>
        )
      }
      
    
    </div>
  );
}
}

export default App;
