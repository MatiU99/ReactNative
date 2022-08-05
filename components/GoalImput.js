import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";
import { useState } from "react";

function GoalImput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalsImputHandler(text) {
    setEnteredGoalText(text);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.imputContainer}>
        <Image style={styles.image} source={require("../assets/images/goal.png")}/>
        <TextInput
          style={styles.textIput}
          placeholder="yours course goal"
          onChangeText={goalsImputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#BA55D3" />
          </View>
        </View>
      </View>
    </Modal>
  );
}
export default GoalImput;

const styles = StyleSheet.create({
  imputContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  
    backgroundColor: "#311b61"
  },
  image:{
    width: 100,
    height:100,
    margin: 20,
  },
  textIput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor:"#e4d0ff",
    borderRadius:8,
    color: "#120438",
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
