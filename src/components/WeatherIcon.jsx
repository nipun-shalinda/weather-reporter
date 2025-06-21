import { Sun, Cloud, CloudRain, CloudSnow, Zap } from 'lucide-react'

const WeatherIcon = ({ condition, isDay }) => {
  const conditionLower = condition.toLowerCase()
  
  if (conditionLower.includes('sunny') || conditionLower.includes('clear')) {
    return isDay ? <Sun className="w-16 h-16 text-yellow-400" /> : <div className="w-16 h-16 rounded-full bg-gray-300 border-4 border-gray-400"></div>
  }
  else if (conditionLower.includes('cloud')) {
    return <Cloud className="w-16 h-16 text-gray-400" />
  }
  else if (conditionLower.includes('rain') || conditionLower.includes('drizzle')) {
    return <CloudRain className="w-16 h-16 text-blue-400" />
  }
  else if (conditionLower.includes('snow')) {
    return <CloudSnow className="w-16 h-16 text-blue-200" />
  }
  else if (conditionLower.includes('thunder') || conditionLower.includes('storm')) {
    return <Zap className="w-16 h-16 text-purple-400" />
  }
  
  return <Cloud className="w-16 h-16 text-gray-400" />
}

export default WeatherIcon