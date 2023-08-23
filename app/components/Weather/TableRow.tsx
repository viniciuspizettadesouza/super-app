import React from "react";
import { WeatherData } from "@/app/interfaces/weather.interface";

const formatTemperature = (temp: number) => `${Math.round(temp)}º C`;
const formatHumidity = (humidity: number) => `${humidity}%`;

const TableRow: React.FC<{ item: WeatherData }> = ({ item }) => (
    <tr>
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            {formatTemperature(item.temp)}
        </td>
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            {formatTemperature(item.feels_like)}
        </td>
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            {formatHumidity(item.humidity)}
        </td>
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            {item.weather[0].main}
        </td>
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            {item.weather[0].description}
        </td>
    </tr>
);

export default TableRow;