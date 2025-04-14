import { View, StyleSheet, Text, Pressable } from "react-native";

export const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={(pressedData) => {
          if (pressedData.pressed) return styles.IOS_ripple;
        }}
      >
        <Text style={styles.goalItemStyle}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    borderRadius: 8,
    backgroundColor: "#5e0acc",
    margin: 8,
    color: "white",
  },
  goalItemStyle: {
    color: "white",
    padding: 10,
  },
  IOS_ripple: {
    opacity: 0.5,
    backgroundColor: "#dddddd",
  },
});
