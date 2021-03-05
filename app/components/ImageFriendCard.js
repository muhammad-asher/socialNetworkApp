//import liraries
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

// create a component
function ImageCard({ item }) {
	return (
		<View style={styles.container}>
			<Image style={styles.avatar} source={item.image} />
			<Text>{item.name}</Text>
		</View>
	);
}

// define your styles
const styles = StyleSheet.create({
	container: {
		margin: 3,
	},
	avatar: {
		resizeMode: "cover",
		height: 100,
		width: 125,
		borderRadius: 50,
		marginTop: 7,
		borderRadius: 10,
	},
});

//make this component available to the app
export default ImageCard;
