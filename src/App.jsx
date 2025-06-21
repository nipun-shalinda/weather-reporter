import { useState, useEffect } from 'react'
import MainWeatherDisplay from './components/MainWeatherDisplay'
import LoadingScreen from './components/LoadingScreen'
import ErrorScreen from './components/ErrorScreen'

function App() {
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentCity, setCurrentCity] = useState('Colombo')
  const [lastUpdated, setLastUpdated] = useState(null)

  const fetchWeatherData = async (city = 'Colombo') => {
    setLoading(true)
    setError(null)
    
    try {
      const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=yes`
      )
      
      if (!response.ok) throw new Error('Weather data not found')
      
      const data = await response.json()
      setWeatherData(data)
      setCurrentCity(data.location.name)
      setLastUpdated(new Date())
    } catch (err) {
      setError(err.message)
      console.error('Error fetching weather:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchWeatherData()
  }, [])

  if (loading) return <LoadingScreen />
  if (error) return <ErrorScreen error={error} onRetry={() => fetchWeatherData()} />

  return (
    <MainWeatherDisplay 
      weatherData={weatherData}
      currentCity={currentCity}
      lastUpdated={lastUpdated}
      onRefresh={() => fetchWeatherData(currentCity)}
      onCityChange={fetchWeatherData}
    />
  )
}

export default App