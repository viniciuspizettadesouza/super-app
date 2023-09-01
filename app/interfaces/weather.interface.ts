
// Weather Types
export interface WeatherData {
    current: WeatherCurrentData;
    hourly: WeatherHourlyData[];
    lat: number;
    lon: number;
    timezone: string;
    timezone_offset: number;
}

export interface WeatherCurrentData {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
}

export interface WeatherHourlyData {
    dt: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    weather: WeatherCondition[];
    pop: number;
}

export interface WeatherCondition {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface LocationData {
    latitude: number;
    longitude: number;
}

// Geocode Types
export interface GeocodeResult {
    address_components: AddressComponent[];
    formatted_address: string;
    geometry: Geometry;
    place_id: string;
    types: string[];
}

export interface AddressComponent {
    long_name: string;
    short_name: string;
    types: string[];
}

export interface Geometry {
    bounds: {
        northeast: {
            lat: number;
            lng: number;
        };
        southwest: {
            lat: number;
            lng: number;
        };
    };
    location: {
        lat: number;
        lng: number;
    };
    location_type: string;
    viewport: {
        northeast: {
            lat: number;
            lng: number;
        };
        southwest: {
            lat: number;
            lng: number;
        };
    };
}