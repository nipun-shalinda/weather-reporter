import axios from 'axios';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.weatherapi.com/v1';

export const fetchCurrentWeather = async (location = 'Colombo') => {
  try {
    const response = await axios.get(
      `${BASE_URL}/current.json?key=${API_KEY}&q=${location}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};