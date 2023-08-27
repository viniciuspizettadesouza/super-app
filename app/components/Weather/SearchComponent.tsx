import React, { useState } from "react";
import { useWeatherContext } from "@contexts/WeatherContext";
import {
  WeatherData,
  GeocodeResult,
} from "@/app/interfaces/weather.interface";
import { fetchGeocode, fetchGeocodeReverse, fetchWeather } from "@app/api";
import { setLocalStorageData } from "@utils/localStorageUtils";
import { getLocation } from "@utils/geolocationUtils";
import { handleError } from "@utils/errorHandlingUtils";

const SearchComponent: React.FC = () => {
  const {
    selectedCity,
    setSelectedCity,
    searchedCities,
    setLatitude,
    setLongitude,
    setGeocodeResponse,
    setWeatherForecastHourly,
  } = useWeatherContext();

  const [inputValue, setInputValue] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = event.target.value;
    setInputValue(value);
    setIsOpen(true);
  };

  const handleOptionClick = (option: string) => {
    setInputValue(option);
    setSelectedCity(option);
    setIsOpen(false);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  const cacheSearch = (selectedCity: string) => {
    if (selectedCity && !searchedCities.includes(selectedCity)) {
      setLocalStorageData("searchedCities", [...searchedCities, selectedCity]);
    }
  };

  const geocoding = async (selectedCity: string) => {
    if (!selectedCity) {
      handleError(new Error("Selected city is null."));
      return;
    }

    cacheSearch(selectedCity);
    try {
      const geocode = await fetchGeocode(selectedCity);
      handleGeocodeResponse(geocode);
    } catch (error) {
      handleError(error as Error);
    }
    setSelectedCity(null);
  };

  const handleGeocodeResponse = (geocode: GeocodeResult) => {
    const firstResult = geocode;
    const { lat, lng } = firstResult?.geometry.location;
    setGeocodeResponse(firstResult);
    weatherOneCallAPI(lat, lng);
  };

  const reverseGeocoding = async () => {
    try {
      const locationData = await getLocation();
      const { latitude, longitude } = locationData;
      setLatitude(latitude);
      setLongitude(longitude);

      const geocodeResult = await fetchGeocodeReverse(latitude, longitude);
      setGeocodeResponse(geocodeResult);
      weatherOneCallAPI(latitude, longitude);
    } catch (error) {
      handleError(error as Error);
    }
  };

  const weatherOneCallAPI = async (lat: number, lon: number) => {
    try {
      const weatherData: WeatherData = await fetchWeather(lat, lon);
      handleWeatherResponse(weatherData);
    } catch (error) {
      handleError(error as Error);
    }
  };

  const handleWeatherResponse = (weatherData: WeatherData) => {
    setWeatherForecastHourly(weatherData.hourly);
  };

  const filteredCities: string[] = searchedCities.filter((option: string) =>
    option.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex flex-row items-center justify-center my-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search City"
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          />
          {isOpen && (
            <div className="absolute z-10 mt-2 py-2 bg-white border border-gray-300 rounded-md shadow-lg w-full">
              {filteredCities.map((option, index) => (
                <div
                  key={index}
                  className="px-4 py-2 cursor-pointer hover:bg-indigo-100"
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
        <button
          className="bg-gray-200 text-gray-600 p-1 rounded-r"
          onClick={reverseGeocoding}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>

        <button
          className="bg-blue-500 text-white p-2 rounded"
          onClick={() => geocoding(selectedCity)}
        >
          Search
        </button>
        {selectedCity && (
          <div className="mt-2 text-gray-600">
            Selected option: {selectedCity}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchComponent;
