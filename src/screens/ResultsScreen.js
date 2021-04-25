import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function ResultsScreen() {
  return <View style={style.container}><Text>Result screen</Text></View>;
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
