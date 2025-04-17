import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const PrimaryButton = ({ children, onPress }) => {
  // the props have a child property which can be accessed by : props.children, here we have destructured the same in the function itself
  //some shit
  const onPressHandler = () => {
    console.log("im pressed");
    onPress();
  };
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPressHandler}
        android_ripple={{ color: Colors.primary600 }}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
      >
        <Text style={styles.buttonText}>{children}</Text>

      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    backgroundColor: Colors.primary500,
    borderRadius: 28,
    margin: 4,
    elevation: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.5,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
  pressed: {
    opacity: 0.75,
  },
});
