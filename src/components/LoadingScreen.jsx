import { Loader2 } from 'lucide-react'

const LoadingScreen = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-center">
        <Loader2 className="w-12 h-12 text-white animate-spin mx-auto mb-4" />
        <p className="text-white text-lg">Loading weather data...</p>
      </div>
    </div>
  )
}

export default LoadingScreen