import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View,} from "react-native";
import BottomTabs from "./app/navigation/BottomTabs";

export default function App() {
	return (
		<View style={styles.container}>
			<NavigationContainer>
				<BottomTabs />
			</NavigationContainer>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 30,
	},
});
