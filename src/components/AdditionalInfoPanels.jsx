import { Thermometer, RefreshCw, Clock, Calendar } from 'lucide-react'

const AdditionalInfoPanels = ({ weatherData, lastUpdated }) => {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-6">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-200">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
          <Thermometer className="w-6 h-6 mr-2" />
          Additional Details
        </h3>
        <div className="space-y-3">
          <InfoRow label="Pressure" value={`${weatherData.current.pressure_mb} mb`} />
          <InfoRow 
            label="Local Time" 
            value={new Date(weatherData.location.localtime).toLocaleTimeString()} 
          />
          <InfoRow 
            label="Day/Night" 
            value={weatherData.current.is_day ? '☀️ Day' : '🌙 Night'} 
          />
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-200">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
          <RefreshCw className="w-6 h-6 mr-2" />
          Last Updated
        </h3>
        <div className="space-y-2">
          <InfoRow icon={<Clock className="w-5 h-5 mr-2" />} value={lastUpdated?.toLocaleTimeString()} />
          <InfoRow icon={<Calendar className="w-5 h-5 mr-2" />} value={lastUpdated?.toLocaleDateString()} />
        </div>
      </div>
    </div>
  )
}

const InfoRow = ({ label, value, icon }) => (
  <div className="flex justify-between items-center">
    {label && <span className="text-white/70">{label}</span>}
    {icon && icon}
    <span className="text-white font-medium">{value}</span>
  </div>
)

export default AdditionalInfoPanels