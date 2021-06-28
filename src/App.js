import React, { Component } from 'react';
import SearchBox from './components/search-box/search-box.components';
import CardList from  './components/card-list/card-list.components';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
     monsters:  [],
     searchField: ''
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState( {monsters:users }))
  }
  render() {
    const { monsters, searchField } = this.state;
    console.log('searchField', searchField, 'searchField')
    const filteredMonsters =  monsters.filter(monster => 
     ( searchField ? monster.email.toLowerCase().includes(searchField.toLowerCase()) : true) ||
     ( searchField ? monster.name.toLowerCase().includes(searchField.toLowerCase()) : true)
  ) 
    return (
     <div className="App">
     <h1>Monsters Rodolex</h1>
      <SearchBox 
       placeholder='search monsters'
       handleChange={e => this.setState({searchField: e.target.value})} 
       />
      <CardList monsters = {filteredMonsters} />
     </div>
    
    );
  }
}

export default App;
