import React, { createContext, useContext, useEffect, useState } from "react";
import { CurrentWeatherData, HourlyWeatherData } from "../interfaces/weather.interface";
import { getLocalStorageData } from "@utils/localStorage";

const WeatherContext = createContext<any>(null);

export const useWeatherContext = () => {
  return useContext(WeatherContext);
};

interface WeatherProviderProps {
  children: React.ReactNode;
}

export const WeatherProvider: React.FC<WeatherProviderProps> = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [weatherForecastCurrent, setWeatherForecastCurrent] = useState<CurrentWeatherData[]>([]);
  const [weatherForecastHourly, setWeatherForecastHourly] = useState<HourlyWeatherData[]>([]);
  const [searchedCities, setSearchedCities] = useState<string[]>([
    'Lisbon',
    'Madrid',
    'Paris',
    'London',
    'Rome',
    'Berlin'
  ]);
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [geocodeResponse, setGeocodeResponse] = useState<any | null>(null);

  useEffect(() => {
    const weatherForecast = getLocalStorageData("weatherForecast");
    const searchedCities = getLocalStorageData("searchedCities");

    if (weatherForecast) {
      setWeatherForecastCurrent(weatherForecast.current);
      setWeatherForecastHourly(weatherForecast.hourly);
    }

    if (searchedCities) {
      setSearchedCities(searchedCities);
    }
  }, []);

  const weatherContextValues = {
    selectedCity,
    setSelectedCity,
    weatherForecastCurrent,
    setWeatherForecastCurrent,
    weatherForecastHourly,
    setWeatherForecastHourly,
    searchedCities,
    setSearchedCities,
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
