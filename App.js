import * as React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { API_KEY } from './utils/apiWeatherKey';
import Weather from './components/Weather'



const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [weatherError, setErrorMessage] = useState(null);
  useEffect(() => {
    console.log(navigator.geolocation.getCurrentPosition)
    navigator.geolocation.getCurrentPosition(
      position => {
        this.fetchWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        setErrorMessage('Error Gettig Weather Condtions')
      }
    );
  });
  async function fetchWeather(lat,lon) {
      const apiResp = await `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
      console.log(apiResp)
  };

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
    backgroundColor: '#66D3FA',
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
