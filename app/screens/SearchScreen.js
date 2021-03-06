//import liraries
import React, { Component } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import SearchComponent from "../components/SearchComponent";

// create a component
const SearchScreen = () => {
	return (
		<View style={styles.container}>
			<SearchComponent />
		</View>
	);
};

// define your styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
	},
});

//make this component available to the app
export default SearchScreen;
