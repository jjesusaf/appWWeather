import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import useDataRequest from '../Hooks/useDataRequest';

const Weather = () => {

    const { dataWeather } = useDataRequest(    
    )
    
    console.log(dataWeather)

    return (
        <div>
            <h1>{dataWeather?.sys?.country}</h1>
            <h2>{dataWeather.name}</h2>
            <img src={`http://openweathermap.org/img/wn/${dataWeather?.weather?.[0]?.icon}@2x.png`} alt="" />
            <h1>{dataWeather?.main?.feels_like}°</h1>
            <button>Change °K / °C</button>
        </div>
    );
};

export default Weather;