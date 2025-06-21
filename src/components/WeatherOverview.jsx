import WeatherIcon from './WeatherIcon'

const WeatherOverview = ({ weatherData }) => {
  return (
    <div className="text-center md:text-left">
      <div className="flex items-center justify-center md:justify-start mb-4">
        <div className="mr-4">
          <WeatherIcon 
            condition={weatherData.current.condition.text} 
            isDay={weatherData.current.is_day} 
          />
        </div>
        <div>
          <div className="text-6xl md:text-7xl font-bold text-white mb-2 drop-shadow-lg">
            {Math.round(weatherData.current.temp_c)}°
          </div>
          <div className="text-white/80 text-xl font-medium">
            {weatherData.current.condition.text}
          </div>
        </div>
      </div>
      <div className="text-white/70 text-lg">
        Feels like {Math.round(weatherData.current.feelslike_c)}°C
      </div>
    </div>
  )
}

export default WeatherOverview