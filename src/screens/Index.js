import React from "react";
import { Text, View, StyleSheet } from "react-native";
import HomeButton from "../components/Home/HomeButton";
import PickerServers from "../components/Home/PickerServers";
import Toggle from "../components/Home/Toggle";

export default function Index() {
  return (
    <View style={styles.container}>
      <Toggle />
      {/* <PickerServers /> */}
      <HomeButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 20,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
