import { LocationData } from '@interfaces/weather.interface';

export async function getLocation(): Promise<LocationData> {
    try {
        const position = await new Promise<GeolocationPosition>((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        return position.coords;
    } catch (error) {
        const typedError = error as Error;
        console.error(typedError.message);
        throw typedError;
    }
}
