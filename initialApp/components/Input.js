import React from "react";
import { StyleSheet, TextInput, Modal, Button, View } from "react-native";

const Input = (props) => {
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.ınputContainer}>
        <TextInput
          placeholder="My Goal"
          style={{
            width: "60%",
            borderBottomColor: "black",
            borderBottomWidth: 1,
          }}
          onChangeText={props.goalHandler}
          value={props.value}
        ></TextInput>
        <Button title="Add" onPress={props.addNewGoal}></Button>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  ınputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Input;
