import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../screens/SearchScreen";

const Stack = createStackNavigator();

function SearchStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="SearchScreen"
				component={SearchScreen}
				options={{
					title: "Search",
					headerStyle: styles.header,
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

export default SearchStack;
