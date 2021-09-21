import React from "react";
import { View, TouchableOpacity, Image, StyleSheet, Text } from "react-native";
import SettingWrapper from "../components/SettingWrapper";
import {getDeviceLanguage} from "../store/slices/languageSlice"
import { useDispatch } from "react-redux";

const LanguageSetting = (props) => {
  const dispatch=useDispatch();
  const changeLanguage=(lang)=>{
    dispatch(getDeviceLanguage(lang))

  }
  return (
    <View>
      <SettingWrapper>
        <TouchableOpacity onPress ={changeLanguage.bind(null,"turkish")}>
          <View style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={require("../assets/turkish-icon.png")}
            />
            <Text style={styles.textStyle}>Turkish</Text>
          </View>
        </TouchableOpacity>
      </SettingWrapper>

      <SettingWrapper>
        <TouchableOpacity onPress ={changeLanguage.bind(null,"english")}>
          <View style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={require("../assets/english-icon.png")}
            />
            <Text style={styles.textStyle}>English</Text>
          </View>
        </TouchableOpacity>
      </SettingWrapper>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    height: 60,
    overflow: "hidden",
    alignItems: "center",
    marginBottom: 4,
    paddingLeft: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    height: 20,
    width: 20,
  },
  textStyle: {
    color: "white",
  },
});

export default LanguageSetting;
