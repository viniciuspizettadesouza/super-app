
export interface WeatherData {
    dt: number;
    temp: number;
    feels_like: number;
    humidity: number;
    weather: {
        main: string;
        description: string;
    }[];
}
