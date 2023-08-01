/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import styles from "./WeatherDetails.module.css";
import {
  FaSun,
  FaRegMoon,
  FaMapLocationDot,
  FaCalendarDays,
  FaTemperatureHigh,
  FaTemperatureLow,
  FaWind,
  FaEye,
  FaCloudRain,
  FaCloud,
} from "react-icons/fa6";
import { TbUvIndex } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";
import { GiSunRadiations } from "react-icons/gi";

const WeatherDeatils = ({ weatherInfo }) => {
  console.log(weatherInfo.days[0].hours);
  const icon = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/2de560da89d87de44e3ca2a6593a12c19c8346d3/SVG/2nd%20Set%20-%20Color/${weatherInfo.days[0].icon}.svg`;
  const hourly = weatherInfo.days[0].hours;
  const hourUpdates = hourly.map((value, index) => {
    const icons = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/2de560da89d87de44e3ca2a6593a12c19c8346d3/SVG/2nd%20Set%20-%20Color/${value.icon}.svg`;
    return (
      <motion.div key={index} className={styles.hourUpdates}>
        <div>
          {value.temp}
          <sup>&deg;C</sup>
        </div>
        <div>
          <img
            src={icons}
            alt=""
            height="50px"
            width="50px
          "
          />
        </div>
        <div>{value.datetime}</div>
      </motion.div>
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.tempShow}>
        <span>
          {weatherInfo.currentConditions.temp}
          <sup>&deg;C</sup>
        </span>
        <span className={styles.iconic}>
          <img src={icon} alt="" height="200px" width="200px" />
        </span>
        <p className={styles.condition}>
          Conditions: {weatherInfo.currentConditions.conditions}
        </p>
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
              <FaWind style={{ marginRight: "8px" }} />
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
              <FaTemperatureHigh style={{ marginRight: "8px" }} />
              Temperature Max: {weatherInfo.days[0].tempmax}
              <sup>&deg;C</sup>
            </p>
            <p>
              <FaTemperatureLow style={{ marginRight: "8px" }} />
              Temperature Min: {weatherInfo.days[0].tempmin}
              <sup>&deg;C</sup>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.HourDetails}>
        <h3
          style={{ borderBottom: "1px solid aqua", padding: "8px 0px 8px 0px" }}
        >
          <i>Hourly forecast</i>
        </h3>
        <motion.div whileTap={"grabbing"}>
          <motion.div
            drag="x"
            dragConstraints={{ right: 500, left: -500 }}
            className={styles.hour}
          >
            {hourUpdates}
          </motion.div>
        </motion.div>
        {/* <ul className={styles.hour}>{hourUpdates}</ul> */}
      </div>
      {/* <div>Hourlydetails</div>
      <div>dayForcast15-</div> */}
    </div>
  );
};

export default WeatherDeatils;
