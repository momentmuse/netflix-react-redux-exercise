import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DiscoverList from './components/discover-list';
import MyList from './components/my-list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <MyList />
        <DiscoverList />
      </div>
    );
  }
}

export default App;
