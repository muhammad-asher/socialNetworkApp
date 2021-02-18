//import liraries
import React from "react";
import { View, StyleSheet, Image, Text, } from "react-native";
import colors from "../config/colors";

// create a component
function HeaderFeed(props) {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image
					style={styles.statusimage}
					source={require("../../assets/images/userImage1.jpg")}
				/>

				<Image
					shadowColor={colors.danger}
					style={styles.statusimage}
					source={require("../../assets/images/userImage4.jpg")}
				/>
				<Image
					style={styles.statusimage}
					source={require("../../assets/images/userImage3.jpg")}
				/>
			</View>
			<View style={styles.textcomp}>
				<Text style={styles.text}>My Story</Text>
				<Text style={styles.text}>Christina</Text>
				<Text style={styles.text}>Albert</Text>
			</View>
		</View>
	);
}

// define your styles
const styles = StyleSheet.create({
	container: { margin: 10, padding: 10, backgroundColor: "white" },
	statusimage: {
		height: 74,
		width: 74,
		borderRadius: 40,
		marginHorizontal: 10,
		borderColor: "red",
		borderColor: "#4CACE4",
		borderWidth: 3,
	},
	header: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
	},
	textcomp: {
		flexDirection: "row",
		alignItems: "center",
	},
	text: {
		color: "grey",
		marginHorizontal: 25,
		paddingVertical: 4,
		fontSize: 10,
		justifyContent: "center",
	},
});

//make this component available to the app
export default HeaderFeed;
