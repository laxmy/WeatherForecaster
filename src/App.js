import React, { Component } from 'react';
import './App.css';
import SearchBar from './containers/search-bar';
import WeatherCarousel from './containers/weather-list';

class App extends Component {
  render() {
    return (
      <div className="App">
      <SearchBar />
      <WeatherCarousel />
      </div>
    );
  }
}

export default App;
