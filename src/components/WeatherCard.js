import React, { Component } from 'react'
import WeatherIcons from 'react-weathericons'
import { Container , Row , Col, Table } from 'reactstrap'
import background from '../images/day.jpeg'
import { convertKelvinToCelsius, getNextFiveDaysFrom } from '../utils/helper'
import DayForecast from './DayForecastTable'


class WeatherCard extends Component{

  getFiveDaysTemps(){
     let weatherForecastArray = Object.keys(this.props.weather.list).map(key => this.props.weather.list[key]);
     return weatherForecastArray.filter((value,index) => index % 8=== 0);
  }

  render(){
    const weatherForCity =  this.props.weather;
    const icon = "wi-owm-"+ weatherForCity.list[0].weather[0].id;
    const backgroundStyle ={ backgroundImage: `url(${background})` , height: "80vh", width:"100%", opacity: 0.8}

    const currentTime = Date.now();
    const nextFiveDays = getNextFiveDaysFrom(new Date(currentTime));
    const nextFiveDaysTemps = this.getFiveDaysTemps();

    return(
      <div className="weather-Card" style ={ backgroundStyle }>
      <Container>
      <Row>
        <Col className ="justify-content-center">
          <h3> {weatherForCity.city.name} </h3>
        </Col>
      </Row>
      <Row>
        <Col className ="justify-content-center">
          <h3> <WeatherIcons name="main-Icon"className={`${icon}`} size="3x" /> </h3>
        </Col>
      </Row>
      <Row>
        <Col className ="justify-content-center">
          <h6> { weatherForCity.list[0].weather[0].description} </h6>
        </Col>
      </Row>
      <Row>
        <Col  className ="justify-content-center">
          <h3> {convertKelvinToCelsius(weatherForCity.list[0].main.temp)}<WeatherIcons name="unit-Icon" className={`wi-celsius`}/> </h3>
        </Col>
      </Row>
      <Row>
        <Col>
            <h5>Min: { convertKelvinToCelsius(weatherForCity.list[0].main.temp_min)}
               <WeatherIcons name="unit-Icon" className={`wi-celsius`}/>
            </h5>
        </Col>
        <Col>
            <h5>Max: {convertKelvinToCelsius(weatherForCity.list[0].main.temp_max)}
               <WeatherIcons name="unit-Icon" className={`wi-celsius`} />
            </h5>
        </Col>
      </Row>
      <Row>
        <Table id="fiveDayForecast-Table">
          <thead>
            <tr>
              {nextFiveDays.map(day => (
                <th className="table-Headercell" key={day}>
                  { day }
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
            { nextFiveDaysTemps && nextFiveDaysTemps.map(eachDay => (
              <td key={eachDay.dt}><DayForecast dayForecast ={eachDay}/></td>
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
