/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import WeatherDeatils from "../WeatherDetails/WeatherDeatils";
import { getData } from "../../service/fetchData";

import LoadingScreen from "../LoadingScreen/LoadingScreen";
import { convertData } from "../../service/convertData";
import { getGeoLocation } from "../../service/getGeoLocation";

const WeatherApp = () => {
  const [location, setLocation] = useState("");
  const [weatherInfo, setWeatherInfo] = useState({});
  const [isFetching, setIsFetching] = useState(true);
  const [isError, setIsError] = useState(false);
  const [geoLocation, setGeoLocation] = useState(false);

  useEffect(() => {
    getGeoLocation()
      .then((val) => {
        convertData(val.coords.latitude, val.coords.longitude)
          .then((val) => {
            getData(val.address.state)
              .then((val) => {
                setWeatherInfo(val);
                setLocation("");
                setIsFetching(false);
              })
              .catch((error) => {
                setIsFetching(false);
                setIsError(true);
              });
          })
          .catch((error) => {
            setIsFetching(false);
            setIsError(true);
          });
      })
      .catch((error) => {
        setIsFetching(false);
        setGeoLocation(true);
      });
  }, []);

  const onSearchChangeHandler = (e) => {
    setLocation(e);
  };

  const getWeatherInfo = () => {
    setGeoLocation(false);
    setIsFetching(true);
    setIsError(false);
    getData(location)
      .then((val) => {
        setWeatherInfo(val);
        setLocation("");
        setIsFetching(false);
        setGeoLocation(false);
      })
      .catch((error) => {
        console.error(error);
        setIsError(true);
      });
  };

  const keyHandler = (e) => {
    if (e.key === "Enter") {
      getWeatherInfo();
    }
  };
  return (
    <>
      <SearchBar
        inputValue={location}
        searchBtnHandler={getWeatherInfo}
        onSearchChangeHandler={onSearchChangeHandler}
        isDisable={location.trim().length === 0}
        keyHandler={keyHandler}
      />

      {geoLocation && (
        <LoadingScreen message="Location access was denied so enter location manually " />
      )}
      {!geoLocation && (
        <>
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
      )}
    </>
  );
};

export default WeatherApp;
