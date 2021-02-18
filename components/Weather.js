import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Weather = ({ weather, temperature, maxTemperature, minTemperature }) => {
  return (
    <View style={styles.weatherContainer}>
      <View style={styles.left}>
      <View style={styles.headerContainer}>
        <MaterialCommunityIcons size={68} name="weather-cloudy" color={'#fff'} />
        <Text style={styles.title}>{weather}</Text>
      </View>
        <Text style={styles.tempText}>{ temperature && temperature.toFixed(0) }˚</Text>
      </View>
      <View style={styles.left}>
      <View style={styles.asideContainer}>
        <Text style={styles.tempAditionalText1}>{ maxTemperature && maxTemperature.toFixed(0) }˚</Text>
        <Text style={styles.tempAditionalText2}>{ minTemperature && minTemperature.toFixed(0) }˚</Text>
      </View>
      </View>
    
    </View>
  );
};

const styles = StyleSheet.create({
  weatherContainer: {
    flex: 4,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'flex-start',
  },
  left:{
    marginLeft:40,
    marginRight:30
  },
  right:{
  },
  headerContainer:{
    flexDirection: 'row',
  },
  asideContainer: {
    flexDirection: 'column',
    marginTop:135,
  },
  temperatures:{
    flexDirection: 'row'
  },
  tempText: {
    fontSize: 158,
    color: '#fff'
  },
  tempAditionalText1:{
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    fontSize: 38,
    color: '#fff'
  },
  tempAditionalText2: {
    fontSize: 38,
    color: '#fff'
  },

  title: {
    fontSize: 48,
    color: '#fff'
  },
});

export default Weather;