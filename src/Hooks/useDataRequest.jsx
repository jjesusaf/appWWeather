import React from 'react';
import axios from 'axios';
import { useState, useEffect} from 'react';


const useDataRequest = () => {

    const [dataWeather, setDataWeather] = useState({})


    useEffect(() => {

        const options = {
            enableHighAccuracy: true,
            timeout: Infinity,
            maximumAge: 0
        }

        const success = pos => {
            const lat = pos.coords.latitude
            const lon = pos.coords.longitude
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6620b080941f082b73dfcbc0106a3e44`)
                .then( res => setDataWeather(res.data))
        }

        function error(err) {

        }

        navigator.geolocation.getCurrentPosition(success, error, options);

    }, [])


    return {dataWeather}
};

export default useDataRequest;