//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../config/colors";

// create a component
const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ProfileScreen</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.dark,
  },
  text:{
    color:colors.white
  }  
});

//make this component available to the app
export default ProfileScreen;
