/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import WeatherDeatils from "../WeatherDetails/WeatherDeatils";
import { getData } from "../../service/fetchData";

import LoadingScreen from "../LoadingScreen/LoadingScreen";

const WeatherApp = () => {
  const [location, setLocation] = useState("");
  const [weatherInfo, setWeatherInfo] = useState({});
  const [isFetching, setIsFetching] = useState(true);
  const [isError, setIsError] = useState(false);

  const onSearchChangeHandler = (e) => {
    setLocation(e);
  };

  useEffect(() => {
    setIsError(false);
    getData()
      .then((val) => {
        setWeatherInfo(val);
        setLocation("");
        setIsFetching(false);
      })
      .catch((error) => {
        console.error(error);
        setIsError(true);
      });
  }, [setIsFetching, setWeatherInfo, setLocation]);

  const getWeatherInfo = () => {
    setIsFetching(true);
    setIsError(false);
    getData(location)
      .then((val) => {
        setWeatherInfo(val);
        setLocation("");
        setIsFetching(false);
      })
      .catch((error) => {
        console.error(error);
        setIsError(true);
      });
  };

  return (
    <>
      <SearchBar
        inputValue={location}
        searchBtnHandler={getWeatherInfo}
        onSearchChangeHandler={onSearchChangeHandler}
        isDisable={location.trim().length === 0}
      />

      {isError && (
        <LoadingScreen message="Please Enter a Valid Country or City Name." />
      )}
      {!isError && (
        <>
          {isFetching && (
            <LoadingScreen message="Please Wait While We Reterive Weather Details." />
          )}
          {!isFetching && <WeatherDeatils weatherInfo={weatherInfo} />}
        </>
      )}
    </>
  );
};

export default WeatherApp;
