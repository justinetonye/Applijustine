import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import ResultsScreen from "./ResultsScreen";
import SettingsScreen from "./SettingsScreen";
import Index from "./Index";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Results") {
            iconName = focused ? "ios-list" : "ios-list-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#4682B4",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={Index} />
      <Tab.Screen name="Results" component={ResultsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4682B4",
  },
});
