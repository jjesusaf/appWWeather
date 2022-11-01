import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import useDataRequest from '../Hooks/useDataRequest';

const Weather = () => {

    const { dataWeather } = useDataRequest(
    )

    const [change, setChange] = useState(true)

    const shuffle = () => {
        setChange(!change)
    }

    const icon = dataWeather.weather?.[0]?.icon
    return (
        <div className='Weather'>
            <h1>{dataWeather?.sys?.country}</h1>
            <h2>{dataWeather.name}</h2>
            {icon && <img src={`http://openweathermap.org/img/wn/${icon}@4x.png`} alt="" />}
            {change === true ? <h1>{dataWeather?.main?.feels_like}°K</h1> : <h1>{dataWeather?.main?.feels_like - 273.15}°C</h1>}
            <button onClick={shuffle}>Change °K / °C</button>
        </div>
    );
};

export default Weather;