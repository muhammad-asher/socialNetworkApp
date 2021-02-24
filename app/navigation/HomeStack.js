import React from "react";
import { Image, StyleSheet, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import PostDetailScreen from "../screens/PostDetailScreen";
import { camera, checklist } from "../../assets/icons";

const Stack = createStackNavigator();

function HomeStack() {
	const headerLeft = () => {
		return <Image source={camera} style={styles.leftImage} />;
	};

	const headerRight = () => {
		return <Image source={checklist} style={styles.leftImage} />;
	};

	return (
		<Stack.Navigator>
			<Stack.Screen
				name="HomeScreen"
				component={HomeScreen}
				options={{
					title: "Feed",
					headerLeft: () => headerLeft(),
					headerRight: () => headerRight(),
					headerTitleAlign: "center",
				}}
			/>
			<Stack.Screen
				name="PostDetailScreen"
				component={PostDetailScreen}
				options={{
					title: "Post Detail",
					headerStyle: styles.header,
				}}
			/>
		</Stack.Navigator>
	);
}

const styles = StyleSheet.create({
	leftImage: {
		resizeMode: "contain",
		height: 30,
		width: 30,
		marginHorizontal: 10,
	},
});

export default HomeStack;
