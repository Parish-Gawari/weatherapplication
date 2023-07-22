/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./WeatherDetails.module.css";
import {
  FaSun,
  FaRegMoon,
  FaTemperatureHigh,
  FaTemperatureLow,
  FaMapLocationDot,
  FaCalendarDays,
  FaWind,
  FaEye,
  FaCloudRain,
} from "react-icons/fa6";
import { TbUvIndex } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";
import { GiSunRadiations } from "react-icons/gi";

const WeatherDeatils = ({ weatherInfo }) => {
  return (
    <div className={styles.container}>
      <div className={styles.tempShow}>
        <span>
          {weatherInfo.currentConditions.temp}
          <sup>&deg;C</sup>
        </span>
        <p>{weatherInfo.currentConditions.conditions}</p>
        <hr />
        <p>
          <FaMapLocationDot style={{ margin: "4px" }} />
          {weatherInfo.resolvedAddress}
        </p>
        <p>
          <FaCalendarDays style={{ margin: "4px" }} />
          {weatherInfo.days[0].datetime}
        </p>
        <p>{weatherInfo.description}</p>
      </div>

      <div className={styles.todayHighlights}>
        <div className={styles.todayHighlightsContainer}>
          <h3 className={styles.headingSection}>Today's Highlight</h3>
          <div className={styles.sunsetRise}>
            <h4 className={styles.headings}>Sunset & Sunrise</h4>
            <p>
              <FaSun style={{ marginRight: "8px" }} />
              Sunrise: {weatherInfo.currentConditions.sunrise} AM
            </p>

            <p>
              <FaRegMoon style={{ marginRight: "8px" }} />
              Sunset: {weatherInfo.currentConditions.sunset} PM
            </p>
          </div>
          <div className={styles.humidityFeels}>
            <h4 className={styles.headings}>Other Details</h4>
            <p>
              <WiHumidity style={{ marginRight: "4px" }} />
              Humidity: {weatherInfo.currentConditions.humidity}
            </p>
            <p>
              <FaWind style={{ marginRight: "4px" }} />
              Wind Speed: {weatherInfo.currentConditions.windspeed} km/h
            </p>
            <p>
              <TbUvIndex style={{ marginRight: "4px" }} />
              UV-Index: {weatherInfo.currentConditions.uvindex}
            </p>
            <p>
              <FaEye style={{ marginRight: "4px" }} />
              Visibility: {weatherInfo.currentConditions.visibility}
            </p>
            <p>
              <FaCloudRain style={{ marginRight: "4px" }} />
              Rain: {weatherInfo.currentConditions.precipprob}%
            </p>
            <p>
              <GiSunRadiations style={{ marginRight: "4px" }} />
              Solar Radiation: {weatherInfo.currentConditions.solarradiation}
            </p>
          </div>
          <div className={styles.temperatureDetails}>
            <h4 className={styles.headings}>Temperature Details</h4>
            <p>
              <FaTemperatureHigh />
              Temperature Max: {weatherInfo.days[0].tempmax}
              <sup>&deg;C</sup>
            </p>
            <p>
              <FaTemperatureLow />
              Temperature Min: {weatherInfo.days[0].tempmin}
              <sup>&deg;C</sup>
            </p>
          </div>
        </div>
      </div>
      {/* <div className={styles.weatherDetails}>Weatherdetails</div> */}
      {/* <div>Hourlydetails</div>
      <div>dayForcast15-</div> */}
    </div>
  );
};

export default WeatherDeatils;
