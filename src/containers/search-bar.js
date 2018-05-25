import React , { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Navbar , NavbarBrand, Button, Form, FormGroup, Input } from 'reactstrap';

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
    <Navbar color="light" expand="md">
      <NavbarBrand href='/'>Five day Forecaster</NavbarBrand>
      <Form inline>
        <FormGroup>
          <Input placeholder="Search for a city to know its forecast"
          onChange ={ this.onInputChange } value = { this.state.term }  />
        <Button onClick ={ this.onFormSubmit }>Search</Button>
        </FormGroup>
      </Form>
    </Navbar>
    );
  }
}

function mapDispatchToProps(dispatch)
{
  return bindActionCreators({ fetchWeather }, dispatch);
}

function mapStateToProps({weather})
{
  return { weather };
}


export default connect (mapStateToProps, mapDispatchToProps)(SearchBar);
