import { GeocodeResult, WeatherData } from '@app/interfaces/weather.interface'; // Update the path as needed

const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';
const openWeatherMapApiKey = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY || '';

interface ErrorResponse {
    cod: string;
    message: string;
}

async function fetchData<T>(url: string): Promise<T> {
    try {
        const response = await fetch(url);

        if (response.status === 200) {
            const data = await response.json();
            return data as T;
        } else if (response.status === 400) {
            const errorResponse: ErrorResponse = await response.json();
            throw new Error(`Bad Request: ${errorResponse.message}`);
        } else {
            throw new Error(`API response status is not 200 OK: ${response.status}`);
        }
    } catch (error) {
        console.error("Failed retrieving data", error);
        throw error;
    }
}

export async function fetchGeocode(selectedCity: string): Promise<GeocodeResult> {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${selectedCity}&key=${googleMapsApiKey}`;
    const { results } = await fetchData<{ results: GeocodeResult[] }>(url);
    return results[0];
}


export async function fetchGeocodeReverse(latitude: number, longitude: number): Promise<GeocodeResult[]> {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${googleMapsApiKey}`;
    return fetchData<GeocodeResult[]>(url);
}

export async function fetchWeather(lat: number, lon: number): Promise<WeatherData> {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,daily,alerts&units=metric&appid=${openWeatherMapApiKey}`;
    return fetchData<WeatherData>(url);
}
