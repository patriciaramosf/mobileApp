import * as React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { API_KEY } from './utils/apiWeatherKey';
import Weather from './components/Weather'
import { LinearGradient } from 'expo-linear-gradient';


const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [weatherError, setErrorMessage] = useState(null);
  const [lat, setLat] = useState(25);
  const [lon, setLon] = useState(25);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
    const getWeather = async () => {
      setIsLoading(true)
      try {
        const result = await fetchWeather(lat, lon)
        setData(result.data)
        console.log(data);
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
        // Background Linear Gradient
        colors={['#72EDF2', '#5151E5', ]}
        style={styles.linearGradient}
      > 
      {isLoading ?
        <Text>Fetching The Weather</Text>
        :
        <Weather />
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
