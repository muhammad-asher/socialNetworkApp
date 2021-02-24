//import liraries
import React, { Component } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import {
	userImage1,
	userImage2,
	userImage3,
	userImage4,
} from "../../assets/images";
import FriendsCard from "../components/FriendsCard";
import SearchComponent from "../components/SearchComponent";

const friendsData = [
	{
		image: userImage1,
		name: "Mark",
		status: "Accept",
	},
	{
		image: userImage4,
		name: "Christina",
		status: "Unfriend",
	},
	{
		image: userImage3,
		name: "Albert",
		status: "Unfriend",
	},
	{
		image: userImage2,
		name: "Darren",
		status: "Unfriend",
	},
];

// create a component
const CommunityScreen = () => {
	return (
		<View style={styles.container}>
			<SearchComponent />
			<FlatList
				data={friendsData}
				keyExtractor={(_, index) => index.toString()}
				renderItem={({ item }) => {
					return <FriendsCard item={item} />;
				}}
			/>
		</View>
	);
};

// define your styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
	},
});

//make this component available to the app
export default CommunityScreen;
