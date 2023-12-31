import React from "react";
import { useWeatherContext } from "@contexts/WeatherContext";
import { WeatherHourlyData } from "@interfaces/weather.interface";
import TableHeader from "@components/Weather/TableHeader";
import TableRow from "@components/Weather/TableRow";

const TableList: React.FC = () => {
  const { weatherForecastHourly } = useWeatherContext();
  const hasForecastData = weatherForecastHourly.length > 0;

  return (
    <div className="flex justify-center">
      <div className="bg-white shadow-md rounded mt-6 w-full">
        <h1 className="text-2xl font-semibold p-4">
          Weather forecast for the next 48 hours
        </h1>

        {hasForecastData && (
          <table className="min-w-full leading-normal">
            <TableHeader />
            <tbody>
              {weatherForecastHourly.map(
                (item: WeatherHourlyData, index: number) => (
                  <TableRow key={index} item={item} index={index} />
                )
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default TableList;
