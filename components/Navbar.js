import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const Navbar = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.navbar}>
      <MaterialCommunityIcons name="menu" size={44} color="white" style={styles.menuButton} />
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
    padding:20,
    marginTop:20
  },
  menuButton:{
  },
  navbarTitle:{
  color:'red',
  }
});

export default Navbar;