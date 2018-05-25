import React, { Component } from 'react'
import WeatherIcons from 'react-weathericons'
import { Container , Row , Col, Table } from 'reactstrap'
import background from '../images/day.jpeg'
import { convertKelvinToCelsius, getNextFiveDaysFrom } from '../utils/helper'


class WeatherCard extends Component{
  getFiveDaysTemps(){
     let weatherForecastArray = Object.keys(this.props.weather.list).map(key => this.props.weather.list[key]);
     return weatherForecastArray.filter((value,index) => index % 8=== 0);
  }
  renderEachDayForecast(dayForecast){
    return (
      <Table className="small-table">
        <thead>
          <tr colSpan="2">
            <th><WeatherIcons className={`wi-owm-${dayForecast.weather[0].id}`}/></th>
          </tr>
        </thead>
        <tbody>
          <tr colSpan="2">
            <td>{ dayForecast.weather[0].description }</td>
          </tr>
          <tr>
            <td>{ dayForecast.main.temp_min}</td>
            <td>{ dayForecast.main.temp_max}</td>
          </tr>
        </tbody>
      </Table>
    );
  }

  render(){
    const weatherForCity =  this.props.weather;
    const icon = "wi-owm-"+ weatherForCity.list[0].weather[0].id;
    const backgroundStyle ={ backgroundImage: `url(${background})` , height: "80vh", width:"100%", opacity: 0.8}

    const currentTime = Date.now();
    const nextFiveDays = getNextFiveDaysFrom(new Date(currentTime));
    const nextFiveDaysTemps = this.getFiveDaysTemps();
    console.log(nextFiveDaysTemps);
    return(
      <div className="Weather-card" style ={ backgroundStyle }>
      <Container>
      <Row>
        <Col className ="justify-content-center">
          <h3> {weatherForCity.city.name} </h3>
        </Col>
      </Row>
      <Row>
        <Col className ="justify-content-center">
          <h3> <WeatherIcons className={icon} size="3x" /> </h3>
        </Col>
      </Row>
      <Row>
        <Col className ="justify-content-center">
          <h6> { weatherForCity.list[0].weather[0].description} </h6>
        </Col>
      </Row>
      <Row>
        <Col  className ="justify-content-center">
          <h3> {convertKelvinToCelsius(weatherForCity.list[0].main.temp)} </h3>
        </Col>
      </Row>
      <Row>
        <Col>
            <h5> { convertKelvinToCelsius(weatherForCity.list[0].main.temp_min)} </h5>
        </Col>
        <Col>
            <h5> {convertKelvinToCelsius(weatherForCity.list[0].main.temp_max)} </h5>
        </Col>
      </Row>
      <Row>
        <Table>
          <thead>
            <tr>
              {nextFiveDays.map(day => (
                <th className="table-cell" key={day}>
                  { day }
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
            { nextFiveDaysTemps && nextFiveDaysTemps.map(eachDay => (
              <td>{this.renderEachDayForecast(eachDay)}</td>
            ))}
            </tr>
          </tbody>
        </Table>
      </Row>
      </Container>
      </div>
    );
  }
}

export default WeatherCard
