import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const Item = (props) => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.value.key)}>
      <View style={styles.listItem} key={Math.random().toString()}>
        <Text>{props.value.goal}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "gray",
    height: 20,
    marginTop: 10,
  },
});

export default Item;
