"use client";
import React from "react";
import SearchComponent from "@components/Weather/SearchComponent";
import TableList from "@components/Weather/TableList";
import { WeatherProvider } from "@contexts/WeatherContext";

const InputGeocode: React.FC = () => {
  return (
    <WeatherProvider>
      <div className="container mx-auto">
        <SearchComponent />
        <TableList />
      </div>
    </WeatherProvider>
  );
};

export default InputGeocode;
