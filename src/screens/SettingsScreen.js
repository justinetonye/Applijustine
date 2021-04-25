import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function SettingsScreen() {
  return <View style={styles.container}><Text>Settings</Text></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4682B4",

  },
});
