import React , { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Form, FormGroup, Input, NavbarBrand, Nav, NavItem } from 'reactstrap';

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
    this.setState({ term: "" });
  }
  render(){
    return (
      <div className="top-Bar">
              <NavbarBrand>Five Day Forecaster</NavbarBrand>
              <Nav>
              <NavItem  className="ml-auto">
              <Form inline onSubmit={this.onFormSubmit}>
                <FormGroup>
                  <Input placeholder="Search for a city in US"
                  onChange ={ this.onInputChange } value = { this.state.term }  />
                <Button type="submit">Search</Button>
                </FormGroup>
              </Form>
            </NavItem>
          </Nav>
    </div>
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
