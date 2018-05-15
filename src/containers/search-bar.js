import React , { Component } from 'react';


class SearchBar extends Component
{
  constructor(props){
    super(props);
    this.state ={ term : ''}
    this.onInputChange = this.onInputChange.bind(this);
  }
  onInputChange(event){
    this.setState({term: event.target.value});
  }
  onFormSubmit = (event) =>
  {
    event.preventDefault();
    //Fetch weather from API
  }
  render(){
    return (
      <div className = 'search-bar'>
        <form className="input-group" onSubmit = {this.onFormSubmit}>
          <input placeholder="Search for a city to know its forecast"
          value={ this.state.term } />
          <button type ='submit' className="btn btn-primary"
          onChange ={ this.onInputChange }>submit</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
