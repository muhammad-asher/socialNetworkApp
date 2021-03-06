//import liraries
import React, { Component } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import HomePostComponent from "../components/HomePostComponent";
import {
	postImage1,
	postImage2,
	postImage3,
	postImage4,
	postImage5,
	postImage6,
	userImage1,
	userImage2,
	userImage3,
	userImage4,
	userImage5,
	userImage6,
} from "../../assets/images";
import StatusFeed from "../components/StatusFeed";
const data = [
	{
		name: "Christina",
		postImage: postImage1,
		address: "Paris,France",
		text: "This is a very nice post",
		avatar: userImage4,
		likeCount: 20,
		commentCount: 10,
		datecount: "2 months ago",
	},
	{
		name: "Mark",
		postImage: postImage2,
		address: "Lahore,Pakistan",
		text: "This is a very nice post",
		avatar: userImage1,
		likeCount: 8,
		commentCount: 9,
		datecount: "3 months ago",
	},
	{
		name: "Darren",
		postImage: postImage3,
		address: "Delhi,India",
		text: "This is a very nice post",
		avatar: userImage2,
		likeCount: 30,
		commentCount: 2,
		datecount: "1 month ago",
	},
	{
		name: "Albert",
		postImage: postImage4,
		address: "Berlin,Germany",
		text: "This is a very nice post",
		avatar: userImage3,
		likeCount: 10,
		commentCount: 4,
		datecount: "6 months ago",
	},
	{
		name: "Christina",
		postImage: postImage5,
		address: "Helsinki,Finland",
		text: "This is a very nice post",
		avatar: userImage4,
		likeCount: 40,
		commentCount: 13,
		datecount: "5 months ago",
	},
	{
		name: "Marsh",
		postImage: postImage6,
		address: "Tartu,Estonia",
		text: "This is a very nice post",
		avatar: userImage6,
		likeCount: 30,
		commentCount: 17,
		datecount: "8 months ago",
	},
];
const statusdata = [
	{
		image: userImage4,
		statusname: "Christina",
	},
	{
		image: userImage1,
		statusname: "Mark",
	},
	{
		image: userImage6,
		statusname: "Yousaf",
	},
	{
		image: userImage3,
		statusname: "Albert",
	},
	{
		image: userImage2,
		statusname: "Darren",
	},
	{
		image: userImage5,
		statusname: "Mosh",
	},
];
const HomeScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<FlatList
				data={statusdata}
				keyExtractor={(_, index) => index.toString()}
				showsHorizontalScrollIndicator={false}
				horizontal={true}
				renderItem={({ item }) => {
					return <StatusFeed item={item} />;
				}}
			/>

			<FlatList
				data={data}
				keyExtractor={(item, index) => index.toString()}
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) => {
					return <HomePostComponent item={item} navigation={navigation} />;
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
export default HomeScreen;
