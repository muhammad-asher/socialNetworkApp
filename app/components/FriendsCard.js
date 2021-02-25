//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button } from "react-native-paper";
// create a component
const FriendsCard = ({ item }) => {
	return (
		<View style={styles.container}>
			<Image source={item.image} style={styles.avatar} />
			<View>
				<Text style={styles.name}>{item.name}</Text>
			</View>
			<View style={styles.buttoncontainer}>
				<Button
					style={styles.button}
					mode="outlined"
					onPress={() => console.log(item.status)}
					color="white"
				>
					{item.status}
				</Button>
			</View>
		</View>
	);
};

// define your styles
const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",

		marginTop: 10,
		paddingVertical: 3,
	},
	avatar: {
		resizeMode: "cover",
		height: 70,
		width: 70,
		borderRadius: 35,
		marginHorizontal: 10,
	},
	name: {
		fontSize: 16,
		fontWeight: "600",
		color: "black",
		justifyContent: "center",
		alignItems: "center",
	},

	button: {
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 40,
		backgroundColor: "rgba(0,0,0,0.4)",
	},
	buttoncontainer: {
		paddingLeft: 78,
	},
});

//make this component available to the app
export default FriendsCard;
