//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Searchbar } from "react-native-paper";

// create a component
const SearchComponent = () => {
	return (
		<View style={styles.container}>
			<Searchbar
				placeholder="Search"
				style={{
					backgroundColor: "rgba(255,255,255,0.6)",
					width: "96%",
					height: 40,
					marginTop: 10,
					borderRadius: 40,
				}}
			/>
		</View>
	);
};

// define your styles
const styles = StyleSheet.create({
	container: {
		// justifyContent: "center",
		alignItems: "center",
	},
	input: {
		backgroundColor: "rgba(105,105,105,0.2)",
		width: "90%",
		paddingVertical: 8,
		paddingHorizontal: 5,
		borderRadius: 5,
	},
});

//make this component available to the app
export default SearchComponent;
