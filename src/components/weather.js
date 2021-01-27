import React from "react";

const Weather = props => (
    <>
        {props.city &&
        <>
            <p> Местоположение: {props.city}, {props.country}</p>
            <p> Температура: {props.temp}</p>
            <p> Давление: {props.pressure}</p>
            <p> Заход солнца: {props.sunset}</p>
        </>
        }
        <p> { props.error } </p>
    </>
);

export default Weather;