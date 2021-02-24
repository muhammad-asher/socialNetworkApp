//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

// create a component
const ChatCard = ({ item, navigation }) => {
	return (
		<View style={styles.container}>
			<Image source={item.image} style={styles.avatar} />
			<View>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate("ChatDetailScreen");
					}}
				>
					<Text style={styles.name}>{item.statusname}</Text>
					<Text style={styles.subText}>{item.text}</Text>
				</TouchableOpacity>
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
		marginHorizontal: 5,
		paddingVertical: 5,
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
	},
	subText: {
		fontSize: 13,
		color: "grey",
	},
});

//make this component available to the app
export default ChatCard;
