import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BottomNavigation from "./navigation/mainNavigation";
import Home from "./screens/Home";
import { Provider } from "react-redux";
import store from "./store/store";
export default function App() {
  return (
    <Provider store={store}>
      <BottomNavigation />
    </Provider>
  );
}

console.log("aaaaaaaa");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
