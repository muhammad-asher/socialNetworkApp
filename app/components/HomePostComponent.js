//import liraries
import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	Pressable,
	TouchableOpacity,
} from "react-native";
import { likeIcon, commentIcon } from "../../assets/icons";

// create a component
const HomePostComponent = ({ item }) => {
	const [iconsOpened, setIconsOpened] = useState(false);
	return (
		<Pressable
			onPress={() => {
				if (iconsOpened) {
					setIconsOpened(false);
				}
			}}
			style={styles.container}
		>
			<View style={styles.header}>
				<Image source={item.avatar} style={styles.headerImage} />
				<View style={styles.headerTop}>
					<Text style={styles.name}>{item.name}</Text>
					<View style={styles.headerBottom}>
						<Text style={styles.date}>{item.datecount}</Text>
						<Text style={styles.location}>{item.address}</Text>
					</View>
				</View>
			</View>
			<View>
				<Text style={styles.postText}>{item.text}</Text>
				<Image source={item.postImage} style={styles.postImage} />
			</View>
			{iconsOpened ? (
				<View style={styles.reactionContainer}>
					<Image source={likeIcon} style={styles.reactionIcon} />
					<Image source={likeIcon} style={styles.reactionIcon} />
					<Image source={likeIcon} style={styles.reactionIcon} />
					<Image source={likeIcon} style={styles.reactionIcon} />
					<Image source={likeIcon} style={styles.reactionIcon} />
				</View>
			) : null}
			<View style={styles.cardFooter}>
				<TouchableOpacity
					onLongPress={() => {
						setIconsOpened(true);
					}}
				>
					<Image source={likeIcon} style={styles.footerIcon} />
				</TouchableOpacity>

				<Text style={styles.footerCount}>{item.likeCount}</Text>
				<Image source={commentIcon} style={styles.footerIcon} />
				<Text style={styles.footerCount}>{item.commentCount}</Text>
			</View>
		</Pressable>
	);
};

// define your styles
const styles = StyleSheet.create({
	container: {
		margin: 10,
		padding: 10,
		backgroundColor: "white",
	},
	headerImage: {
		resizeMode: "cover",
		height: 60,
		width: 60,
		borderRadius: 40,
		marginHorizontal: 10,
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
	},
	headerBottom: {
		flexDirection: "row",
	},
	name: {
		fontSize: 16,
		fontWeight: "600",
	},
	date: {
		color: "grey",
		fontSize: 12,
		marginRight: 30,
	},
	location: {
		color: "green",
		fontSize: 12,
	},
	postImage: {
		resizeMode: "cover",
		width: "100%",
		height: 200,
		marginVertical: 20,
	},
	postText: {
		fontSize: 14,
		textAlign: "justify",
		marginTop: 20,
	},

	footerIcon: {
		resizeMode: "contain",
		height: 25,
		width: 25,
		marginRight: 5,
	},
	cardFooter: {
		flexDirection: "row",
		alignItems: "center",
	},
	footerCount: {
		marginRight: 20,
	},
	reactionIcon: {
		resizeMode: "contain",
		height: 30,
		width: 30,
		marginRight: 5,
	},
	reactionContainer: {
		flexDirection: "row",
		backgroundColor: "white",
		alignSelf: "center",
		borderRadius: 20,
		paddingHorizontal: 10,
		position: "absolute",
		bottom: 65,
		paddingVertical: 5,
	},
});

//make this component available to the app
export default HomePostComponent;
