const QuickCityButtons = ({ currentCity, onCityChange }) => {
  const cities = ['Colombo', 'Kandy', 'Galle', 'Jaffna', 'Kurunegala', 'Nuwara Eliya', 'Mathara', 'Trincomalee',]
  
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-6 border border-white/20">
      <h3 className="text-lg font-semibold text-white mb-4">Quick Search</h3>
      <div className="flex flex-wrap gap-2">
        {cities.map((city) => (
          <button
            key={city}
            onClick={() => onCityChange(city)}
            className={`px-4 py-2 rounded-lg transition-all duration-200 ${
              currentCity === city 
                ? 'bg-white/30 text-white' 
                : 'bg-white/10 hover:bg-white/20 text-white/80 hover:text-white'
            } hover:scale-105`}
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  )
}

export default QuickCityButtons