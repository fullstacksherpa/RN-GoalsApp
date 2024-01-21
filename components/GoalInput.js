import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from "react";

const GoalInput = ({ addGoalHandler }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function GoalHandler() {
    addGoalHandler(enteredGoalText);
    setEnteredGoalText('')
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} placeholder="your course goal!" onChangeText={goalInputHandler} value={enteredGoalText}/>
      <Button title="Add Goal" onPress={GoalHandler} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    marginBottom: 24,
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
