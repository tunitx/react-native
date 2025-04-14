import { StyleSheet, View, TextInput, Button, Modal, Alert, Image } from "react-native";
import { useState } from "react";

export const GoalInput = (props) => {
  const [enteredText, setEnteredText] = useState("");
  const textInputHandler = (e) => {
    setEnteredText(e);
  };

  const onGoalAdd = () => {
    if(enteredText.trim().length === 0){
      Alert.alert("Invalid Input.")
      return
    }
    props.onGoalAdd(enteredText);
    setEnteredText("");
    props.modalHandler();
  };

  return (
    <Modal
      style={styles.modalStyle}
      visible={props.visible}
      animationType="slide"
    >
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/goal.png")} />
        <TextInput
          style={styles.textInput}
          placeholder="Your goal!"
          onChangeText={textInputHandler}
          value={enteredText}
          nativeID="idk"
        />
        <View style={styles.buttonView}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              color="#f31282"
              onPress={() => {
                props.modalHandler();
                setEnteredText("");
              }}
            />
          </View>
          <View style={styles.button}>
            <Button color="#b180f0" title="Add" onPress={onGoalAdd} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "grey",
    paddingHorizontal: 20,
    backgroundColor: "#311b6b",
   paddingBottom : 80
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  textInput: {
    width: "100%",
    borderWidth: 2,
    backgroundColor: "#e4d0ff",
    borderColor: "#e4d0ff",
    color: "#120438",
    padding: 16,
    borderRadius : 8
  },

  buttonView: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-evenly",
  },
  button: {
    marginHorizontal: 6,
  },
});
