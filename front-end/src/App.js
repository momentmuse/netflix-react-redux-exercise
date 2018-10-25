import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieList from './components/movie-list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <MovieList />
      </div>
    );
  }
}

export default App;
