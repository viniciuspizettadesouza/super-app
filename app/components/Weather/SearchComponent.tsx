import React from "react";
import { useWeatherContext } from "@contexts/WeatherContext";

const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';
const openWeatherMapApiKey = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY || '';

const SearchComponent: React.FC = () => {
  const {
    inputSearch,
    setInputSearch,
    setWeatherForecastCache,
    searchCache,
    setSearchCache,
    latitude,
    setLatitude,
    longitude,
    setLongitude,
    setGeocodeResponse,
  } = useWeatherContext();

  const getLocation = () => {
    return new Promise<{ latitude: number; longitude: number } | null>((resolve) => {
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
  

  const fetchGeocode = async (inputSearch: string, apiKey: string) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${inputSearch}&key=${apiKey}`
      );
      const json = await response.json();
      return json.results[0];
    } catch (error) {
      console.error("Failed retrieving information", error);
    }
  };

  const weatherOneCallAPI = (lat: number, long: number) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=current,minutely,daily,alerts&units=metric&appid=${openWeatherMapApiKey}`
    )
      .then((response) => response.json())
      .then((json) => {
        cacheWeatherForecast(json);
      })
      .catch((error) => {
        console.error("Failed retrieving information", error);
      });
  };


  const cacheWeatherForecast = (weather: any) => {
    window.localStorage.removeItem("weatherForecastCache");

    if (weather !== null) {
      setWeatherForecastCache(weather.hourly);
      localStorage.setItem("weatherForecastCache", JSON.stringify(weather.hourly));
    }
  };

  const cacheSearch = (inputSearch: string) => {
    const include = searchCache.includes(inputSearch);
    if (inputSearch && !include) {
      setSearchCache([...searchCache, inputSearch]);
      localStorage.setItem("searchCache", JSON.stringify(searchCache));
    }
  };

  const geocoding = (inputSearch: string) => {
    cacheSearch(inputSearch);

    fetchGeocode(inputSearch, googleMapsApiKey)
      .then((geocodeResult) => {
        setGeocodeResponse(geocodeResult);
        const lat = geocodeResult.geometry.location.lat;
        const long = geocodeResult.geometry.location.lng;
        weatherOneCallAPI(lat, long);
      })
      .catch((error) => {
        console.error("Failed retrieving information", error);
      });

    setInputSearch(null);
  };

  const reverseGeocoding = async () => {
    const locationData = await getLocation();

    console.log(locationData)
  
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
    <div className="flex justify-center items-center">
      <div className="w-1/2">
        <div className="flex flex-row items-center">
          <input
            className="w-full px-2 py-1 border rounded-l"
            type="text"
            placeholder="Search City"
            value={inputSearch || ""}
            onChange={(e) => setInputSearch(e.target.value)}
          />
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
          <div className="w-1/6">
            <button
              className="bg-blue-500 text-white p-2 rounded"
              onClick={() => geocoding(inputSearch)}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
