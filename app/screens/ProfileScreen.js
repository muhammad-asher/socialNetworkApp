//import liraries
import React, { Component } from "react";
import { Text, StyleSheet, Image, FlatList, ScrollView } from "react-native";
import {
	userImage1,
	userImage2,
	userImage3,
	userImage4,
	userImage5,
	userImage6,
} from "../../assets/images";
import ImageFriendCard from "../components/ImageFriendCard";

const ProfileScreen = ({ navigation }) => {
	const listData = [
		{
			image: userImage4,
			name: "Christina",
		},
		{
			image: userImage3,
			name: "Curbs",
		},
		{
			image: userImage2,
			name: "Craig",
		},
		{
			image: userImage1,
			name: "Mark",
		},
		{
			image: userImage5,
			name: "Dareen",
		},
		{
			image: userImage6,
			name: "Albert",
		},
	];

	return (
		<ScrollView
			contentContainerStyle={styles.container}
			showsVerticalScrollIndicator={false}
		>
			<Image source={userImage6} style={styles.avatar} />
			<Text style={styles.name}>Mike Heyman</Text>
			<Text
				style={styles.settingButton}
				onPress={() => navigation.navigate("SettingScreen")}
			>
				Profile Settings
			</Text>

			<FlatList
				data={listData}
				keyExtractor={(_, index) => index.toString()}
				contentContainerStyle={{
					paddingBottom: 30,
				}}
				ListHeaderComponent={() => {
					return <Text style={styles.listHeader}>Friends</Text>;
				}}
				showsVerticalScrollIndicator={false}
				numColumns={3}
				renderItem={({ item }) => {
					return <ImageFriendCard item={item} />;
				}}
			/>
			<Text
				style={styles.allfriendsButton}
				onPress={() => navigation.navigate("AllFriendsScreen")}
			>
				See all Friends
			</Text>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
	},
	avatar: {
		resizeMode: "cover",
		height: 100,
		width: 100,
		borderRadius: 50,
		marginTop: 10,
		borderRadius: 10,
	},
	name: {
		fontSize: 16,
		fontWeight: "600",
		marginVertical: 10,
	},
	settingButton: {
		backgroundColor: "#5DA3FA",
		width: "95%",
		paddingVertical: 12,
		textAlign: "center",
		color: "white",
		fontWeight: "600",
		fontSize: 16,
		borderRadius: 10,
	},
	listHeader: {
		fontSize: 16,
		marginVertical: 12,
	},
	allfriendsButton: {
		backgroundColor: "#758283",
		opacity: 0.8,
		width: "95%",
		paddingVertical: 12,
		textAlign: "center",
		color: "white",
		fontWeight: "600",
		fontSize: 16,
		borderRadius: 10,
	},
});

export default ProfileScreen;
