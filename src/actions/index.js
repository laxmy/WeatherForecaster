import axios from 'axios';

const API_KEY = 'cbd649d03def67b65db73cf50858d03a';
export const FETCH_WEATHER ='FETCH_WEATHER';

const ROOTURL =`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

 export default function fetchWeather(city){
   const fetchReqURL = `${ROOTURL}&q=${city},us`;
   const request = axios.get(fetchReqURL);
    return {
      type:FETCH_WEATHER,
      payload: request
    }
 }
