import { StatusBar } from "expo-status-bar";
import { isEmpty } from "lodash";
import React from "react";
import { useState } from "react";
import { StyleSheet, View, Button, ScrollView } from "react-native";
import Item from "./components/Item";
import Input from "./components/Input";

export default function App() {
  const [goal, setGoal] = useState("");
  const [goals, setGoals] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const clearGoal = () => {
    setGoal("");
  };
  const goalHandler = (goal) => {
    setGoal(goal);
  };
  const addNewGoal = () => {
    if (isEmpty(goal)) {
      return;
    }
    setGoals((prev) => [
      ...prev,
      { key: Math.random().toString(), goal: goal },
    ]);
    clearGoal();
    setIsModalOpen(false);
  };

  const onDelete = (id) => {
    console.log(id);
    setGoals((prev) => prev.filter((goal) => id != goal.key));
  };

  return (
    <View style={styles.screen}>
      <View style={styles.content}>
        <Button
          title="Add New Goal"
          onPress={() => setIsModalOpen(true)}
        ></Button>
        <Input
          visible={isModalOpen}
          goalHandler={goalHandler}
          value={goal}
          addNewGoal={addNewGoal}
        ></Input>
      </View>
      <View>
        <ScrollView>
          {goals &&
            goals.map((item) => (
              <Item value={item} onDelete={onDelete} key={item.key} />
            ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
