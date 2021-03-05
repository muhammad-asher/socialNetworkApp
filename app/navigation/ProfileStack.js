import React from "react";
import { Image, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../screens/ProfileScreen";
import { bell } from "../../assets/icons";
const Stack = createStackNavigator();

function ProfileStack() {
	const headerRight = () => {
		return <Image source={bell} style={styles.leftImage} />;
	};
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="ProfileScreen"
				component={ProfileScreen}
				options={{
					title: "Profile",
					headerRight: () => headerRight(),
					headerTitleAlign: "center",
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
		tintColor: "#5DA3FA",
	},
});

export default ProfileStack;
