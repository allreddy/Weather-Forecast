const API_KEY = '53e00653cdf8c785d0ae3f956241111b';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const FETCH_WEATHER = 'FETCH_WEATHER';

import axios from 'axios';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    return {
        'type': FETCH_WEATHER,
        'payload': request
    };
}