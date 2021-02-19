import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const Navbar = ({ city }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.navbar}>
      <MaterialCommunityIcons name="menu" size={44} color="white" style={styles.menuButton} />
      <Text style={styles.city}>{ city }</Text>
      <AntDesign name="plus" size={34} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 2,
    alignSelf: 'stretch'
  },
  navbar:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:20,
    marginTop:20
  },
  menuButton:{
  },
  city:{
  color:'white',
  fontSize:20
  }
});

export default Navbar;