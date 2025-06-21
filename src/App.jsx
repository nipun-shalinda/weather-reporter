import { useWeather } from './hooks/useWeather';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const { weather, loading, error, fetchWeather } = useWeather();

  const handleSearch = (location) => {
    fetchWeather(location);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-800 my-6">
          Weather Reporter
        </h1>
        
        <SearchBar onSearch={handleSearch} />
        
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <div className="text-red-500 text-center my-4">{error}</div>
        ) : (
          weather && <WeatherCard weather={weather} />
        )}
      </div>
    </div>
    
  );
}

export default App;