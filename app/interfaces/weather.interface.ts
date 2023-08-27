export interface HourlyWeather {
    dt: number;
}

export interface CurrentWeather {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
}

export interface WeatherData {
    current: CurrentWeather;
    hourly: HourlyWeather[];
    lat: number;
    lon: number;
    timezone: string;
    timezone_offset: number;
}

export interface LocationData {
    latitude: number;
    longitude: number;
}