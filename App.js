import * as React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { API_KEY } from './utils/apiWeatherKey';
import Weather from './components/Weather'



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
      const result = await fetchWeather(lat, lon)
      setData(result.data)
     /*  console.log(data); */
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
    <View style={styles.container}>
      {isLoading ? (
        <Text>Fetching The Weather</Text>
      ) : (
          <View>
            <Text>Minimalist Weather App</Text>
          </View>
        )}
    </View>
  );
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  welcome: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  },
  instructions: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 5,
  },
});
