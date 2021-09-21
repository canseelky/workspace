import { View, StyleSheet } from "react-native";
import React from "react";

const SettingWrapper = (props) => {
  const childrenStyles = props.style;
  return <View style={styles.container}>{props.children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    height: 80,
    justifyContent: "center",
    marginBottom: 4,
  },
});

export default SettingWrapper;
