import React from 'react'
import WeatherIcons from 'react-weathericons'
import { Table } from 'reactstrap'
import { convertKelvinToCelsius } from '../utils/helper'

function DayForecast(props){
  const dayForecast = props.dayForecast;
  return (
    <Table id="dayForecast-Table">
      <thead>
        <tr colSpan="2">
          <th colSpan="2" className="table-Headercell"><WeatherIcons className={`wi-owm-${dayForecast.weather[0].id}`} name="weather-Icon"/></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan="2">{ dayForecast.weather[0].description }</td>
        </tr>
        <tr>
          <td>Min: { convertKelvinToCelsius(dayForecast.main.temp_min)}<WeatherIcons className={`wi-celsius`} name="unit-Icon"/></td>
          <td>Max: { convertKelvinToCelsius(dayForecast.main.temp_max)}<WeatherIcons className={`wi-celsius`} name="unit-Icon"/></td>
        </tr>
      </tbody>
    </Table>
  );
}
export default DayForecast
