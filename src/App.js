import React, { Component } from 'react';
import Menu from './components/Menu';

import './App.css';
import myData from './data.json';

class App extends Component {

  state = {
    menu: myData,


   }

  render() {
  return (
    <div className="App">
      <h1> App</h1>
      <Menu menu={this.state.menu}/>
    </div>
  );
}
}

export default App;
