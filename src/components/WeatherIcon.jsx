import { WiDaySunny, WiRain, WiCloudy, WiSnow, WiThunderstorm, WiFog } from 'react-icons/wi';

const WeatherIcon = ({ condition }) => {
  const getIcon = () => {
    const conditionText = condition.toLowerCase();
    
    if (conditionText.includes('sunny') || conditionText.includes('clear')) {
      return <WiDaySunny className="text-5xl text-yellow-500" />;
    } else if (conditionText.includes('rain')) {
      return <WiRain className="text-5xl text-blue-500" />;
    } else if (conditionText.includes('cloud')) {
      return <WiCloudy className="text-5xl text-gray-500" />;
    } else if (conditionText.includes('snow')) {
      return <WiSnow className="text-5xl text-blue-200" />;
    } else if (conditionText.includes('thunder') || conditionText.includes('storm')) {
      return <WiThunderstorm className="text-5xl text-purple-500" />;
    } else if (conditionText.includes('fog') || conditionText.includes('mist')) {
      return <WiFog className="text-5xl text-gray-400" />;
    }
    return <WiDaySunny className="text-5xl text-yellow-500" />;
  };

  return getIcon();
};

export default WeatherIcon;