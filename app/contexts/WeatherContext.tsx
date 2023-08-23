import React, { createContext, useContext, useEffect, useState } from "react";
import { WeatherData } from "../interfaces/weather.interface";

const WeatherContext = createContext<any>(null);

export const useWeatherContext = () => {
  return useContext(WeatherContext);
};

interface WeatherProviderProps {
  children: React.ReactNode;
}

export const WeatherProvider: React.FC<WeatherProviderProps> = ({ children }) => {
  const [inputSearch, setInputSearch] = useState<string | null>(null);
  const [weatherForecastCache, setWeatherForecastCache] = useState<WeatherData[]>([]);
  const [searchCache, setSearchCache] = useState<string[]>([]);
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [geocodeResponse, setGeocodeResponse] = useState<any | null>(null);

  useEffect(() => {
    const cachedWeather = localStorage.getItem("weatherForecastCache");
    const cachedSearch = localStorage.getItem("searchCache");

    if (cachedWeather) {
      setWeatherForecastCache(JSON.parse(cachedWeather));
    }

    if (cachedSearch) {
      setSearchCache(JSON.parse(cachedSearch));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("weatherForecastCache", JSON.stringify(weatherForecastCache));
  }, [weatherForecastCache]);

  useEffect(() => {
    localStorage.setItem("searchCache", JSON.stringify(searchCache));
  }, [searchCache]);

  const weatherContextValues = {
    inputSearch,
    setInputSearch,
    weatherForecastCache,
    setWeatherForecastCache,
    searchCache,
    setSearchCache,
    latitude,
    setLatitude,
    longitude,
    setLongitude,
    geocodeResponse,
    setGeocodeResponse,
  };

  return (
    <WeatherContext.Provider value={weatherContextValues}>
      {children}
    </WeatherContext.Provider>
  );
};
