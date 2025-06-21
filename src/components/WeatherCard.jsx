import WeatherIcon from './WeatherIcon';

const WeatherCard = ({ weather }) => {
  const { current, location } = weather;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mt-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{location.name}</h2>
          <p className="text-gray-600">
            {location.region}, {location.country}
          </p>
          <p className="text-gray-500 text-sm">
            {new Date(location.localtime).toLocaleString()}
          </p>
        </div>
        <WeatherIcon condition={current.condition.text} />
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between">
          <span className="text-5xl font-bold text-gray-800">
            {current.temp_c}°C
          </span>
          <span className="text-gray-600">{current.condition.text}</span>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <WeatherDetail label="Humidity" value={`${current.humidity}%`} />
          <WeatherDetail label="Wind Speed" value={`${current.wind_kph} km/h`} />
          <WeatherDetail label="UV Index" value={current.uv} />
          <WeatherDetail
            label="Feels Like"
            value={`${current.feelslike_c}°C`}
          />
        </div>
      </div>
    </div>
  );
};

const WeatherDetail = ({ label, value }) => (
  <div className="bg-blue-50 p-3 rounded-lg">
    <p className="text-sm text-blue-600">{label}</p>
    <p className="font-semibold text-blue-800">{value}</p>
  </div>
);

export default WeatherCard;