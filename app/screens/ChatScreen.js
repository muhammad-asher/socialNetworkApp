//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import SearchComponent from "../components/SearchComponent";
import {
	userImage1,
	userImage2,
	userImage3,
	userImage4,
} from "../../assets/images";
import StatusFeed from "../components/StatusFeed";
import ChatCard from "../components/ChatCard";
// create a component
const ChatData = [
	{
		image: userImage1,
		statusname: "Mark",
		text: "MF how are you??",
	},
	{
		image: userImage4,
		statusname: "Christina",
		text: "MF how are you??",
	},
	{
		image: userImage3,
		statusname: "Albert",
		text: "MF how are you??",
	},
	{
		image: userImage2,
		statusname: "Darren",
		text: "MF how are you??",
	},
];
const ChatScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<SearchComponent />
			<FlatList
				data={ChatData}
				keyExtractor={(_, index) => index.toString()}
				showsHorizontalScrollIndicator={false}
				horizontal={true}
				renderItem={({ item }) => {
					return <StatusFeed item={item} />;
				}}
			/>
			<FlatList
				data={ChatData}
				keyExtractor={(_, index) => index.toString()}
				renderItem={({ item }) => {
					return <ChatCard item={item} navigation={navigation} />;
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
export default ChatScreen;
