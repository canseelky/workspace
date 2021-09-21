import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import translate from "../local/translate";

const Home = (props) => {
  const lang = useSelector((state) => state.language);

  return (
    <View>
      <Text>{translate[lang]["hello"]}</Text>
    </View>
  );
};

export default Home;
