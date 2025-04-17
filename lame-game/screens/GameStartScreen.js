import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Instruction from "../components/game/Instruction";
import Card from "../components/ui/Card";
const GameStartScreen = ({ screenHandler }) => {
  const [input, setInput] = useState("");
  const handleInput = (enteredInput) => {
    setInput(enteredInput);
  };

  const resetInputHandler = () => setInput("");

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(input.trim());

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number", "Number has to be between 1 and 99", [
        { text: "Ok", style: "default", onPress: resetInputHandler },
      ]);
      return;
    }

    console.log("Valid number:", chosenNumber);
    screenHandler(chosenNumber);
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <Instruction>Enter a Number</Instruction>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          value={input}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={handleInput}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },

  buttonContainer: {
    flexDirection: "row",
  },

  numberInput: {
    height: 60,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    flex: 1,
  },
});

export default GameStartScreen;
