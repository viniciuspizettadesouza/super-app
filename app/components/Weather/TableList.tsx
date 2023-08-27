import React from "react";
import { useWeatherContext } from "@contexts/WeatherContext";
import { WeatherData } from "@/app/interfaces/weather.interface";
import TableHeader from "@components/Weather/TableHeader";
import TableRow from "@components/Weather/TableRow";

const TableList: React.FC = () => {
  const {
    weatherForecastHourly
  } = useWeatherContext();

  return (
    <div className="flex justify-center">
      <div className="w-full mt-4">
        <table className="min-w-full">
          <TableHeader />
          <tbody>
            {weatherForecastHourly.map((item: WeatherData, index: number) => (
              <TableRow key={index} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableList;
