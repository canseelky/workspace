import React from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import SettingWrapper from "../components/SettingWrapper";

const Settings = (props) => {
  const navigateLanguageSetting = () => {
    props.navigation.push("LanguageSetting");
  };

  return (
    <View>
      <TouchableOpacity onPress={navigateLanguageSetting}>
        <SettingWrapper>
          <Text style={styles.textStyle}>Language Settings</Text>
        </SettingWrapper>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: "white",
    fontSize: 20,
    marginLeft: 5,
  },
});

export default Settings;
