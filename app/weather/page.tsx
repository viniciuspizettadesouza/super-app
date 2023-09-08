"use client";
import React from "react";
import SearchComponent from "@components/Weather/SearchComponent";
import TableList from "@components/Weather/TableList";
import { WeatherProvider } from "@contexts/WeatherContext";

const WeatherPage: React.FC = () => {
  return (
    <WeatherProvider>
      <div className="container mx-auto py-4">
        <SearchComponent />
        <TableList />
      </div>
    </WeatherProvider>
  );
};

export default WeatherPage;
