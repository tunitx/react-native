import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import GameStartScreen from "./screens/GameStartScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOver from "./screens/GameOver";

export default function App() {
  const [input, setInput] = useState();
  const [gameOver, setGameOver] = useState(false);
  function screenHandler(enteredInput) {
    setInput(enteredInput);
  }

  function gameOverHandler () {
    setGameOver(!gameOver);
  }
  let currentScreen = <GameStartScreen screenHandler={screenHandler} />;

  if (input) currentScreen = <GameScreen inputNumber={input} gameOverHandler={gameOverHandler} />;
  if (gameOver) currentScreen = <GameOver/>
  

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.imageBackground}
      >
        <SafeAreaView style={styles.rootScreen}>{currentScreen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  imageBackground: {
    opacity: 0.2,
  },
});
