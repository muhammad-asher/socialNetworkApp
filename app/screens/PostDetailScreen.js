//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// create a component
const PostDetailScreen = () => {
	return (
		<View style={styles.container}>
			<Text>PostDetailScreen</Text>
		</View>
	);
};

// define your styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#50DBB4",
	},
});

//make this component available to the app
export default PostDetailScreen;
