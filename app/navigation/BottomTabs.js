import React from "react";
import { Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChatScreen from "../screens/ChatScreen";
import CommunityScreen from "../screens/CommunityScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";

import {
  searchIcon,
  homeIcon,
  communityIcon,
  profileIcon,
  chatIcon,
} from "../../assets/icons";

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
    

      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          switch (route.name) {
            case "Home":
              iconName = homeIcon;
              break;

            case "Search":
              iconName = searchIcon;
              break;

            case "Chat":
              iconName = chatIcon;
              break;

            case "Community":
              iconName = communityIcon;
              break;

            case "Profile":
              iconName = profileIcon;
              break;
          }
          return (
            <Image
              source={iconName}
              style={{
                tintColor: color,
                resizeMode: "contain",
                height: 30,
                width: 30,
              }}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="Community"
        component={CommunityScreen}
        options={{
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "",
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({

});

export default BottomTabs;
