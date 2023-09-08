export const formatTemperature = (temp: number) => `${Math.round(temp)}º C`;

export const formatHumidity = (humidity: number) => `${humidity}%`;

export const formatWindSpeed = (wind_speed: number) => `${(wind_speed * 3.6).toFixed(2)} km/h`;

export const formatDate = (dt: number) => new Date(dt * 1000).toLocaleString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
});

export const formatTime = (milliseconds: number) => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = ((milliseconds % 60000) / 1000).toFixed(1);
    return `${minutes.toString().padStart(2, '0')}:${seconds}`;
};
