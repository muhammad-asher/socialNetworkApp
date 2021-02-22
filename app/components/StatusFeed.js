//import liraries
import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import colors from "../config/colors";

// create a component
function StatusFeed({ item }) {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image style={styles.statusimage} source={item.image} />
			</View>
			<Text style={styles.text}>{item.statusname}</Text>
		</View>
	);
}

// define your styles
const styles = StyleSheet.create({
	container: { marginVertical: 10, backgroundColor: "white", height: 120,alignItems:"center" },
	statusimage: {
		resizeMode:"cover",
		height: 74,
		width: 74,
		borderRadius: 36,
		marginHorizontal: 10,
		borderColor: "red",
		borderColor: "#4CACE4",
		borderWidth: 3,
		alignItems: "center",
		justifyContent: "center",
	},

	text: {
		color: "grey",
		marginHorizontal: 24,
		paddingVertical: 4,
		fontSize: 12,
		justifyContent: "center",
		alignItems: "center",
		alignItems: "center",
		justifyContent: "center",
	},
});

//make this component available to the app
export default StatusFeed;
