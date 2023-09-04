import { GeocodeResult, WeatherData } from '@interfaces/weather.interface';
import { Currency } from '@interfaces/currencies.interface';
import { fetchCurrencies2 } from './sample';

const googleMapsApi = 'https://maps.googleapis.com/maps/api/geocode/json';
const openWeatherMapApi = 'https://api.openweathermap.org/data/2.5/onecall';
const currencyLayerApi = 'http://api.currencylayer.com';

const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';
const openWeatherMapApiKey = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY || '';
const currencyLayerApiKey = process.env.NEXT_PUBLIC_CURRENCYLAYER_API_KEY || '';

interface ErrorResponse {
    cod: string;
    message: string;
}

async function handleApiResponse<T>(response: Response): Promise<T> {
    if (response.status === 200) {
        const data = await response.json();
        return data as T;
    } else if (response.status === 400) {
        const errorResponse: ErrorResponse = await response.json();
        throw new Error(`Bad Request: ${errorResponse.message}`);
    } else {
        throw new Error(`API response status is not 200 OK: ${response.status}`);
    }
}

export async function fetchGeocode(selectedCity: string): Promise<GeocodeResult> {
    const url = `${googleMapsApi}?address=${encodeURIComponent(selectedCity)}&key=${googleMapsApiKey}`;
    const response = await fetch(url);
    return handleApiResponse<{ results: GeocodeResult[] }>(response).then((data) => data.results[0]);
}

export async function fetchGeocodeReverse(latitude: number, longitude: number): Promise<GeocodeResult[]> {
    const url = `${googleMapsApi}?latlng=${latitude},${longitude}&key=${googleMapsApiKey}`;
    const response = await fetch(url);
    return handleApiResponse<GeocodeResult[]>(response);
}

export async function fetchWeather(lat: number, lon: number): Promise<WeatherData> {
    const url = `${openWeatherMapApi}?lat=${lat}&lon=${lon}&exclude=minutely,daily,alerts&units=metric&appid=${openWeatherMapApiKey}`;
    const response = await fetch(url);
    return handleApiResponse<WeatherData>(response);
}

export async function fetchCurrencies(): Promise<{ [key: string]: number }> {
    const url = `${currencyLayerApi}/live?access_key=${currencyLayerApiKey}`;
    const response = await fetch(url);

    return fetchCurrencies2
    return handleApiResponse<{ quotes: { [key: string]: number } }>(response).then(data => data.quotes);
}

export async function convertCurrency(amount: number, from: string, to: string): Promise<number> {
    const url = `${currencyLayerApi}/convert/?access_key=${currencyLayerApiKey}&from=${from}&to=${to}&amount=${amount}`;
    const response = await fetch(url);
    const { amount: convertedAmount } = await handleApiResponse<{ amount: number }>(response);
    return convertedAmount;
}
