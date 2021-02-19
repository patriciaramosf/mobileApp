import * as React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { API_KEY } from './utils/apiWeatherKey';
import { LinearGradient } from 'expo-linear-gradient';
import Weather from './components/Weather';
import Navbar from './components/Navbar';


const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [weatherData, setWeatherData] = useState([]);
  const [weatherError, setErrorMessage] = useState(null);
  const [lat, setLat] = useState(25);
  const [lon, setLon] = useState(25);
  const [city, setCity] = useState(null);
  const [time, setTime] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [minTemperature, setMinTemperature] = useState(null);
  const [maxTemperature, setMaxTemperature] = useState(null);
  const [weatherCondition, setWeatherCondition] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
    const getWeather = async () => {
      setIsLoading(true)
      try {
        const result = await fetchWeather(lat, lon)
        setWeatherData(result.data)
        setTemperature(weatherData.main.temp)
        setMaxTemperature(weatherData.main.temp_max)
        setMinTemperature(weatherData.main.temp_min)
        setWeatherCondition(weatherData.weather[0].main)
        setCity(weatherData.name)
        console.log(weatherData)
      } catch (error) {
        console.dir(error)
        weatherError
      }
      setIsLoading(false)
    };
    getWeather();
  }, [lat, lon]);
  async function fetchWeather(lat, lon) {
    try {
      const apiResp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`);
      return apiResp
    } catch (error) {
      console(error)
      setErrorMessage('Error Gettig Weather Condtions')

    }
  }
  return (
    <View style={styles.container} >
      <LinearGradient
        colors={['#72EDF2', '#5151E5', ]}
        style={styles.linearGradient}
      > 
      <Navbar city={city}/>
      {isLoading ?
        <Text>Fetching The Weather</Text>
        :
        <Weather weather={weatherCondition} temperature={temperature} minTemperature={minTemperature} maxTemperature={maxTemperature} />
      }
      </LinearGradient>
    </View>
  );
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  linearGradient: {
    width: '100%',
    height: '100%',
    opacity: 0.95,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
