import { useState } from "react";
import { Text, View, Image, StyleSheet, ActivityIndicator } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOver({ number, count, startGameAgain }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>

      <View style={styles.imageContainer}>
        {!imageLoaded && (
          <ActivityIndicator size="large" color={'white'} />
        )}
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
          onLoad={() => setImageLoaded(true)}
        />
      </View>

      <Text style={styles.summaryText}>
        The Phone took <Text style={styles.highlight}>{count}</Text> chances to
        guess the number <Text style={styles.highlight}>{number}.</Text>
      </Text>

      <PrimaryButton onPress={startGameAgain}>Start Over!</PrimaryButton>
    </View>
  );
}

export default GameOver;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 5,
    marginVertical: 24,
    borderColor: Colors.primary800,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "opens-sans-regular",
    fontSize: 20,
    fontWeight: "600",
    color: Colors.primary800,
    textAlign: "center",
    marginBottom: 12,
    paddingHorizontal: 23,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: Colors.primary800,
  },
});
