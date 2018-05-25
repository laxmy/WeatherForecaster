import { Component } from 'react'

function DayForecast(props){
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
