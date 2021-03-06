//import liraries
import React, { Component } from "react";
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	TouchableOpacity,
} from "react-native";
import NotificationsCard from "../components/NotificationsCard";
import {
	userImage1,
	userImage2,
	userImage3,
	userImage4,
	userImage5,
} from "../../assets/images";

const ChatData = [
	{
		name: "Christina",
		postImage: userImage1,
		text: "MF how are you??",
	},
	{
		name: "John",
		postImage: userImage2,
		text: "MF how are you??",
	},
	{
		name: "Obama",
		postImage: userImage3,
		text: "MF how are you??",
	},
	{
		name: "Clinton",
		postImage: userImage4,
		text: "MF how are you??",
	},
	{
		name: "Trump",
		postImage: userImage5,
		text: "MF how are you??",
	},
];

const NotificationScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<FlatList
				data={ChatData}
				keyExtractor={(_, index) => index.toString()}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() => {
								navigation.navigate("ChatDetailScreen");
							}}
						>
							<NotificationsCard item={item} />
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
};

// define your styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		// justifyContent: "center",
		// alignItems: "center",
		// backgroundColor: "#2c3e50",
	},
});

//make this component available to the app
export default NotificationScreen;
