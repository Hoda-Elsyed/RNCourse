import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [goals, setGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  function showModalHandler() {
    setModalVisible(true);
  }
  function hideModalHandler() {
    setModalVisible(false);
  }

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }
  function addGoalHandler() {
    if (enteredGoal) {
      setGoals((currentGoals) => [
        ...currentGoals,
        { text: enteredGoal, id: Math.random().toString() },
      ]);
      setEnteredGoal("");
      hideModalHandler();
    }
  }
  function deleteGoalHandler(id) {
    setGoals((currentGoals) => currentGoals.filter((goal) => goal.id !== id));
  }
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button
          onPress={showModalHandler}
          title="Add New Goal"
          color="#a065ec"
        />
        <GoalInput
          goalInputHandler={goalInputHandler}
          addGoalHandler={addGoalHandler}
          enteredGoal={enteredGoal}
          visible={modalVisible}
          hideModalHandler={hideModalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(item) => (
              <GoalItem deleteGoalHandler={deleteGoalHandler} item={item} />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 100,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },

  goalsContainer: {
    flex: 5,
  },
});
