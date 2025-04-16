import { TextInput, View, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";

const GameStartScreen = () => {
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
  };

  return (
    <View style={styles.inputContainer}>
      <View>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          value={input}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={handleInput}
        />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.button}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginHorizontal: 24,
    marginTop: 100,
    borderRadius: 8,
    backgroundColor: "#3b021f",
    elevation: 4, // shadow effect for android

    shadowColor: "black", // shadow effect for IOS
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
  buttonContainer: {
    flexDirection: "row",
  },

  numberInput: {
    height: 60,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    flex: 1,
  },
});

export default GameStartScreen;
