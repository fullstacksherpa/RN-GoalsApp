import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";
import { useState } from "react";

const GoalInput = ({ addGoalHandler, modalIsVisible, endAddGoalHandler }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function GoalHandler() {
    addGoalHandler(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={modalIsVisible}>
      <View style={styles.inputContainer}>
        <Image source={require("../assets/images/goal.png")} style={styles.image} />
        <TextInput
          style={styles.textInput}
          placeholder="your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={GoalHandler} color="#5e0acc"/>
          </View>
          <View style={styles.button}>
            <Button title="cancel" onPress={endAddGoalHandler} color='#f31282'/>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: '#e4d0ff',
    color: '#120438',
    width: "100%",
    padding: 8,
    borderRadius: 8,
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 18,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
