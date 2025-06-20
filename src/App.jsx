import { useState } from 'react'
import { fetchCurrentWeather } from './services/weather'

async function App() {
  const [count, setCount] = useState(0)

  const data = await fetchCurrentWeather()

  console.log(data);
  

  return (
    <>
    <div>Hello Weather App!</div>
      
    </>
  )
}

export default App
