import React from "react";
import Image from 'next/image'
import { WeatherHourlyData } from "@interfaces/weather.interface";
import { capitalizeFirstLetter } from "@utils/capitalizeUtils";
import { formatDate, formatTemperature, formatHumidity, formatWindSpeed } from "@utils/formatterUtils";

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
