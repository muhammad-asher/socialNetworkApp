//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import colors from "../config/colors";

// create a component
const HomeScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>HomeScreen</Text>
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
		backgroundColor: colors.dark,
	},
	text: {
		color: colors.white,
	},
	seperator: {
		width: "100%",
		height: 3,
		backgroundColor: colors.grey,
	},
});

//make this component available to the app
export default HomeScreen;
