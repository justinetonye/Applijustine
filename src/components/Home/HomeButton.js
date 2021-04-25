import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function HomeButton() {
  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.container}>
      <Text style={styles.text}>Lancer</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    borderRadius: 100,
  },
  text: {
    marginVertical: 50,
    marginHorizontal: 40,
    color: "#fff",
  },
});
