import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../screens/ProfileScreen";
import NotificationScreen from "../screens/NotificationScreen";
import SettingScreen from "../screens/SettingScreen";
import { bell } from "../../assets/icons";
import AllFriendsScreen from "../screens/AllFriendsScreen";
import ChatDetailScreen from "../screens/ChatDetailScreen";

const Stack = createStackNavigator();

function ProfileStack() {
	const headerRight = (navigation) => {
		return (
			<TouchableOpacity
				onPress={() => navigation.navigate("NotificationScreen")}
			>
				<Image source={bell} style={styles.leftImage} />
			</TouchableOpacity>
		);
	};

	return (
		<Stack.Navigator>
			<Stack.Screen
				name="ProfileScreen"
				component={ProfileScreen}
				options={({ navigation }) => ({
					title: "Profile",
					headerRight: () => headerRight(navigation),
					headerTitleAlign: "center",
					headerStyle: styles.header,
				})}
			/>
			<Stack.Screen
				name="ChatDetailScreen"
				component={ChatDetailScreen}
				options={{
					title: "Chat Post Detail",
				}}
			/>
			<Stack.Screen
				name="NotificationScreen"
				component={NotificationScreen}
				options={{
					title: "Notifications",
					// headerLeft: () => headerLeft(),

					headerStyle: styles.header,
				}}
			/>
			<Stack.Screen
				name="SettingScreen"
				component={SettingScreen}
				options={{
					title: "Setting",
				}}
			/>
			<Stack.Screen
				name="AllFriendsScreen"
				component={AllFriendsScreen}
				options={{
					title: "All Friends",
					headerTitleAlign: "center",
				}}
			/>
		</Stack.Navigator>
	);
}

const styles = StyleSheet.create({
	leftImage: {
		resizeMode: "contain",
		height: 25,
		width: 25,
		marginHorizontal: 10,
		tintColor: "#4B8CF5",
	},
	header: {
		// backgroundColor: "red",
	},
});

export default ProfileStack;
