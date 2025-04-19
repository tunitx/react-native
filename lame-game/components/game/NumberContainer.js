import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 20,
    borderRadius: 8,
    marginTop: 28,
    alignItems: "center",
    justifyContent: "center",
  },

  numberText: {
    fontFamily: "open-sans-bold",
    color: Colors.accent500,
    fontSize: 36,
    fontWeight: "bold",
  },
});
