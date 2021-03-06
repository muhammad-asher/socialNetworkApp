//import liraries
import React, { Component } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import NotificationsCard from "../components/NotificationsCard";
import {
	userImage1,
	userImage2,
	userImage3,
	userImage4,
	userImage5,
} from "../../assets/images";

const Data = [
	{
		name: "Christina",
		postImage: userImage1,
	},
	{
		name: "John",
		postImage: userImage2,
	},
	{
		name: "Obama",
		postImage: userImage3,
	},
	{
		name: "Clinton",
		postImage: userImage4,
	},
	{
		name: "Trump",
		postImage: userImage5,
	},
];

const AllFriendsScreen = () => {
	return (
		<View style={styles.container}>
			<FlatList
				data={Data}
				keyExtractor={(_, index) => index.toString()}
				renderItem={({ item }) => {
					return <NotificationsCard item={item} />;
				}}
			/>
		</View>
	);
};

// define your styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

//make this component available to the app
export default AllFriendsScreen;
