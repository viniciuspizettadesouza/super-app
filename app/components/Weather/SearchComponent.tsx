import React, { useState } from "react";
import { useWeatherContext } from "@contexts/WeatherContext";
import { WeatherData, LocationData } from "@/app/interfaces/weather.interface";
import { setLocalStorageData, removeLocalStorageData } from "@utils/localStorage";

const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';
const openWeatherMapApiKey = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY || '';

const SearchComponent: React.FC = () => {
  const {
    selectedCity,
    setSelectedCity,
    searchedCities,
    setLatitude,
    setLongitude,
    setGeocodeResponse,
    setWeatherForecastHourly
  } = useWeatherContext();

  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
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

  const getLocation = (): Promise<LocationData | null> => {
    return new Promise<LocationData | null>((resolve) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLatitude(latitude);
          setLongitude(longitude);
          resolve({ latitude, longitude });
        },
        (error) => {
          console.error(error.message);
          resolve(null);
        }
      );
    });
  };

  const fetchGeocode = async (selectedCity: string, apiKey: string) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${selectedCity}&key=${apiKey}`
      );
      const json = await response.json();
      return json.results[0];
    } catch (error) {
      console.error("Failed retrieving information", error);
    }
  };

  const weatherOneCallAPI = (lat: number, long: number) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely,daily,alerts&units=metric&appid=${openWeatherMapApiKey}`
    )
      .then((response) => response.json())
      .then((json) => {
        setWeatherForecast(json);
      })
      .catch((error) => {
        console.error("Failed retrieving information", error);
      });
  };

  const setWeatherForecast = (weather: WeatherData) => {
    removeLocalStorageData("weatherForecast");

    if (weather !== null) {
      setLocalStorageData("weatherForecast", weather);
      setWeatherForecastHourly(weather.hourly)
    }
  };

  const cacheSearch = (selectedCity: string) => {
    const include = searchedCities.includes(selectedCity);
    if (selectedCity && !include) {
      setLocalStorageData("searchedCities", [...searchedCities, selectedCity]);
    }
  };

  const geocoding = (selectedCity: string) => {
    cacheSearch(selectedCity);

    fetchGeocode(selectedCity, googleMapsApiKey)
      .then((geocodeResult) => {
        setGeocodeResponse(geocodeResult);
        const lat = geocodeResult.geometry.location.lat;
        const long = geocodeResult.geometry.location.lng;
        weatherOneCallAPI(lat, long);
      })
      .catch((error) => {
        console.error("Failed retrieving information", error);
      });

    setSelectedCity(null);
  };

  const reverseGeocoding = async () => {
    const locationData = await getLocation();

    if (locationData === null) {
      console.error("Cannot get Location");
    } else {
      const { latitude, longitude } = locationData;

      fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${googleMapsApiKey}`
      )
        .then((response) => response.json())
        .then((json) => {
          setGeocodeResponse(json.results[0]);
          weatherOneCallAPI(latitude, longitude);
        })
        .catch((error) => {
          console.error("Failed retrieving information", error);
        });
    }
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex flex-row items-center justify-center">
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
              {searchedCities
                .filter((option: string) =>
                  option.toLowerCase().includes(inputValue.toLowerCase())
                )
                .map((option: string, index: number) => (
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
