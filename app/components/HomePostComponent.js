import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

function HomePostComponent(props) {
	return (
		<View style={styles.container}>
			<Image style={styles.image} source={require("../../assets/asher.png")} />
			<Text>Asher</Text>
			<Text>2 months ago</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	image: {
		resizeMode: "cover",
		width: 80,
		height: 80,
		borderRadius: 100,
	},
});

export default HomePostComponent;
