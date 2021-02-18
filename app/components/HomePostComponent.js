//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { likeIcon, commentIcon } from "../../assets/icons";

// create a component
const HomePostComponent = ({ item }) => {
	return (
		<View>
			<View style={styles.container}>
				<View style={styles.header}>
					<Image source={item.avatar} style={styles.headerImage} />
					<View style={styles.headerTop}>
						<Text style={styles.name}>{item.name}</Text>
						<View style={styles.headerBottom}>
							<Text style={styles.date}>{item.datecount}</Text>
							<Text style={styles.location}>{item.address}</Text>
						</View>
					</View>
				</View>
				<View>
					<Text style={styles.postText}>{item.text}</Text>
					<Image source={item.postImage} style={styles.postImage} />
				</View>

				<View style={styles.cardFooter}>
					<Image source={likeIcon} style={styles.footerIcon} />
					<Text style={styles.footerCount}>{item.likeCount}</Text>
					<Image source={commentIcon} style={styles.footerIcon} />
					<Text style={styles.footerCount}>{item.commentCount}</Text>
				</View>
			</View>
		</View>
	);
};

// define your styles
const styles = StyleSheet.create({
	container: {
		margin: 10,
		padding: 10,
		backgroundColor: "white",
	},
	headerImage: {
		resizeMode: "cover",
		height: 60,
		width: 60,
		borderRadius: 40,
		marginHorizontal: 10,
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
	},
	headerBottom: {
		flexDirection: "row",
	},
	name: {
		fontSize: 16,
		fontWeight: "600",
	},
	date: {
		color: "grey",
		fontSize: 12,
		marginRight: 30,
	},
	location: {
		color: "green",
		fontSize: 12,
	},
	postImage: {
		resizeMode: "cover",
		width: "100%",
		height: 200,
		marginVertical: 20,
	},
	postText: {
		fontSize: 14,
		textAlign: "justify",
		marginTop: 20,
	},

	footerIcon: {
		resizeMode: "contain",
		height: 25,
		width: 25,
		marginRight: 5,
	},
	cardFooter: {
		flexDirection: "row",
		alignItems: "center",
	},
	footerCount: {
		marginRight: 20,
	},
});

//make this component available to the app
export default HomePostComponent;
