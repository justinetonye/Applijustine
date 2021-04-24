import React from "react";
import { View, StyleSheet } from "react-native";

export default function HomeScreen() {
  return <View style={style.container}>Home</View>;
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fefeaa",
  },
});
