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

          if (route.name === "home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "settings") {
            iconName = focused ? "settings" : "settings-outline";
          } else if (route.name === "results") {
            iconName = focused ? "ios-list" : "ios-list";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="home" component={Index} />
      <Tab.Screen name="settings" component={SettingsScreen} />
      <Tab.Screen name="results" component={ResultsScreen} />
    </Tab.Navigator>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fefeaa",
  },
});
