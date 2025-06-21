const AppFooter = () => {
  return (
    <div className="text-center text-white/60 text-sm space-y-1">
      <p>🌤️ Weather data provided by WeatherAPI.com</p>
      <p>⚡ Built with React for Lanka Software Foundation</p>
      <p>🏗️ Created by Nipun - {new Date().getFullYear()}</p>
    </div>
  )
}

export default AppFooter