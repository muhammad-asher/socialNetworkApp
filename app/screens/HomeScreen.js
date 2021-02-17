//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import HomePostComponent from "../components/HomePostComponent";
import colors from "../config/colors";

// create a component
const HomeScreen = () => {
	return (
		<View style={styles.container}>
			<HomePostComponent />

			<View style={styles.seperator}></View>
		</View>
	);
};

// define your styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: colors.white,
	},
	seperator: {
		width: "100%",
		height: 3,
		backgroundColor: colors.black,
	},
});

//make this component available to the app
export default HomeScreen;
