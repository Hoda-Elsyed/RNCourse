import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const GoalItem = ({ item, deleteGoalHandler }) => {
  return (
    <View style={styles.goal}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={deleteGoalHandler.bind(this, item.item.id)}
      >
        <Text style={styles.text}>{item.item.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goal: {
    margin: 8,
    marginTop: 16,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
  },
  text: {
    color: "white",
    padding: 8,
    fontSize: 18,
  },
});
