import { Droplets, Wind, Sun, Eye } from 'lucide-react'

const WeatherStatsGrid = ({ weatherData }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <WeatherStat 
        icon={<Droplets className="w-8 h-8 text-blue-300" />}
        value={`${weatherData.current.humidity}%`}
        label="Humidity"
      />
      <WeatherStat 
        icon={<Wind className="w-8 h-8 text-green-300" />}
        value={weatherData.current.wind_kph}
        label="km/h Wind"
      />
      <WeatherStat 
        icon={<Sun className="w-8 h-8 text-yellow-300" />}
        value={weatherData.current.uv}
        label="UV Index"
      />
      <WeatherStat 
        icon={<Eye className="w-8 h-8 text-purple-300" />}
        value={weatherData.current.vis_km}
        label="km Visibility"
      />
    </div>
  )
}

const WeatherStat = ({ icon, value, label }) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center hover:bg-white/20 transition-all duration-200 hover:scale-105">
    <div className="mx-auto mb-2">{icon}</div>
    <div className="text-2xl font-bold text-white">{value}</div>
    <div className="text-white/70 text-sm">{label}</div>
  </div>
)

export default WeatherStatsGrid