import React , { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchWeather from '../actions/index';

class SearchBar extends Component
{
  constructor(props){
    super(props);
    this.state ={ term : ''}
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onInputChange(event){
    this.setState({term: event.target.value});
  }
  onFormSubmit = (event) =>
  {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
  }
  render(){
    return (
      <div className = 'search-bar'>
        <form className="input-group" onSubmit = {this.onFormSubmit}>
          <input placeholder="Search for a city to know its forecast"
          onChange ={ this.onInputChange } value = { this.state.term }/>
          <button type ='submit' className="btn btn-primary">submit</button>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect (null, mapDispatchToProps)(SearchBar);
