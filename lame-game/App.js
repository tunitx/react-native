import { useEffect, useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import GameStartScreen from "./screens/GameStartScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOver from "./screens/GameOver";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [loaded, error] = useFonts({
    "open-sans-bold": require("./fonts/OpenSans-Bold.ttf"),
    "open-sans-regular": require("./fonts/OpenSans-Regular.ttf"),
  });

  useEffect(() => {
    async function hideSplash() {
      if (loaded) await SplashScreen.hideAsync();
    }

    hideSplash();
  }, [loaded]);

  const [input, setInput] = useState();
  const [gameOver, setGameOver] = useState(false);
  const [count, setCount] = useState();
  function screenHandler(enteredInput) {
    setInput(enteredInput);
  }

  function gameOverHandler(count) {
    setGameOver(!gameOver);
    setCount(count);
  }
  function startGameAgain() {
    setGameOver(!gameOver);
    setInput();
    setCount();
  }

  let currentScreen = <GameStartScreen screenHandler={screenHandler} />;

  if (input && GameOver)
    currentScreen = (
      <GameScreen inputNumber={input} gameOverHandler={gameOverHandler} />
    );
  if (gameOver)
    currentScreen = (
      <GameOver number={input} count={count} startGameAgain={startGameAgain} />
    );

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
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
