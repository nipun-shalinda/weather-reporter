import { Search, MapPin, RefreshCw } from 'lucide-react'
import WeatherHeader from './WeatherHeader'
import WeatherOverview from './WeatherOverview'
import WeatherStatsGrid from './WeatherStatsGrid'
import AdditionalInfoPanels from './AdditionalInfoPanels'
import QuickCityButtons from './QuickCityButtons'
import AppFooter from './AppFooter'
import { useState } from 'react'; 

const MainWeatherDisplay = ({
  weatherData,
  currentCity,
  lastUpdated,
  onRefresh,
  onCityChange
}) => {
  const [searchCity, setSearchCity] = useState('')

  const handleSearch = () => {
    if (searchCity.trim()) {
      onCityChange(searchCity.trim())
      setSearchCity('')
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSearch()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-4">
      <div className="max-w-4xl mx-auto">
        <WeatherHeader />
        
        {/* Search Bar */}
        <div className="mb-8">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchCity}
                onChange={(e) => setSearchCity(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Search for a city..."
                className="w-full px-4 py-3 pl-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40"
              />
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-white/60" />
              <button
                onClick={handleSearch}
                className="absolute right-2 top-2 bg-white/20 hover:bg-white/30 p-2 rounded-xl transition-all duration-200 hover:scale-105"
              >
                <Search className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Weather Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 mb-6 border border-white/20 shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <MapPin className="w-6 h-6 text-white/80 mr-2" />
              <h2 className="text-2xl font-semibold text-white">
                {weatherData.location.name}
                {weatherData.location.country && 
                  `, ${weatherData.location.country}`
                }
              </h2>
            </div>
            <button
              onClick={onRefresh}
              className="bg-white/20 hover:bg-white/30 p-2 rounded-xl transition-all duration-200 hover:scale-105 hover:rotate-180"
              title="Refresh weather data"
            >
              <RefreshCw className="w-5 h-5 text-white" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <WeatherOverview weatherData={weatherData} />
            <WeatherStatsGrid weatherData={weatherData} />
          </div>
        </div>

        <AdditionalInfoPanels weatherData={weatherData} lastUpdated={lastUpdated} />
        <QuickCityButtons currentCity={currentCity} onCityChange={onCityChange} />
        <AppFooter />
      </div>
    </div>
  )
}

export default MainWeatherDisplay