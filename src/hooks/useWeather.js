import { useState, useEffect } from 'react';
import { fetchCurrentWeather } from '../services/weather';

export const useWeather = (initialLocation = 'Colombo') => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWeather = async (location) => {
    try {
      setLoading(true);
      const data = await fetchCurrentWeather(location);
      setWeather(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch weather data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(initialLocation);
  }, [initialLocation]);

  return { weather, loading, error, fetchWeather };
};