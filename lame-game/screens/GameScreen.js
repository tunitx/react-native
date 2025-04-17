import { Text, View, StyleSheet, Alert } from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useReducer, useRef, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

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
    maxRef = useRef(100);

  useEffect(() => {
    if (guess === inputNumber) {
      Alert.alert("The number is guessed finally!", "It's " + guess, [
        {
          text: "Okay",
          style: "default",
        },
      ]);
      gameOverHandler();
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
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{guess}</NumberContainer>

      <View>
        <Text>Higher or lower?</Text>
        <View>
          <PrimaryButton onPress={guessButtonHandler.bind(this, "greater")}>
            +
          </PrimaryButton>
          <PrimaryButton onPress={guessButtonHandler.bind(this, "lower")}>
            -
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    marginTop: 20,
    flex: 1,
    padding: 24,
  },
});
