import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function HomeScreen() {
  return <View style={style.container}><Text>Home</Text></View>;
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fefeaa",
  },
});
