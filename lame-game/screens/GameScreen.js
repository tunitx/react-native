import { Text, View, StyleSheet, Alert } from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useReducer, useRef, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import Instruction from "../components/game/Instruction";
import Ionicons from "@expo/vector-icons/Ionicons";

function generateRandom(min, max, exclude) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  if (num === exclude)
     return generateRandom(min, max, exclude);
  else
     return num;
}

const GameScreen = ({ inputNumber, gameOverHandler }) => {
  const [guess, setGuess] = useState(generateRandom(1, 100, inputNumber));
  console.log("the input number from the gameScreen is :" + inputNumber);
  const minRef = useRef(1),
    maxRef = useRef(100),
    count = useRef(1);

  useEffect(() => {
    if (guess === inputNumber) {
      gameOverHandler(count.current);
    }
  }, [guess, inputNumber]);

  const guessButtonHandler = (val) => {
    if (
      (val === "greater" && inputNumber < guess) ||
      (val === "lower" && inputNumber > guess)
    ) {
      Alert.alert("You know you're lying...", "Don't try to fool me!", [
        {
          text: "Sorry!",
          style: "default",
          onPress: () => console.log("User admitted to cheating"),
        },
      ]);

      return;
    }

    if (val === "greater") {
      minRef.current = guess + 1;
    } else {
      maxRef.current = guess;
    }

    setGuess(generateRandom(minRef.current, maxRef.current, guess));
    count.current ++;
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{guess}</NumberContainer>

      <Card>
        <Instruction style={styles.instructionStyle}>
          Higher or lower?
        </Instruction>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <PrimaryButton onPress={guessButtonHandler.bind(this, "greater")}>
              <Ionicons name="add-outline" size={24} color="white" />
            </PrimaryButton>
          </View>

          <View style={styles.button}>
            <PrimaryButton onPress={guessButtonHandler.bind(this, "lower")}>
              <Ionicons name="remove-outline" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    marginTop: 30,
    flex: 1,
    padding: 24,
    alignItems : 'center'
  },

  buttonContainer : {
    flexDirection : 'row',
    paddingBottom : 10
  },
  button : {
    flex : 1
  },
  instructionStyle : {
    margin : 10,
    paddingBottom : 10
  }
});
