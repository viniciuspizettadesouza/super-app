import React from "react";
import Image from 'next/image'
import { WeatherHourlyData } from "@/app/interfaces/weather.interface";
import { capitalizeFirstLetter } from "@utils/capitalizeUtils";

const formatTemperature = (temp: number) => `${Math.round(temp)}º C`;
const formatHumidity = (humidity: number) => `${humidity}%`;
const formatWindSpeed = (wind_speed: number) => `${(wind_speed * 3.6).toFixed(2)} km/h`;
const formatDate = (dt: number) => new Date(dt * 1000).toLocaleString('en-US', {
  weekday: 'short',
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  hour12: true,
});

const TableRow: React.FC<{ item: WeatherHourlyData, index: number }> = ({ item, index }) => (
  <tr key={index}>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      {formatDate(item.dt)}
    </td>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      {formatTemperature(item.temp)}
    </td>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <div className="flex items-center">
        <Image
          src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
          alt="weather icon"
          width={50}
          height={50}
        />
        <span className="ml-2">
          {capitalizeFirstLetter(item.weather[0].description)}
        </span>
      </div>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      {formatHumidity(item.humidity)}
    </td>
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      {formatWindSpeed(item.wind_speed)}
    </td>
  </tr>
);

export default TableRow;
