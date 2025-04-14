import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import { useState } from "react";
import { GoalItem } from "./components/GoalItem.js";
import { GoalInput } from "./components/GoalInput.js";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const modalHandler = () => {
    setIsModalVisible(!isModalVisible);
  };

  const addGoalHandler = (enteredText) => {
    setCourseGoals((currentGoals) => {
      return [
        ...currentGoals,
        { text: enteredText.trim(), id: Math.random().toString() },
      ];
    });
  };

  const deleteHandler = (id) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <>
      <StatusBar style = "light"/>
      <View style={styles.appContainer}>
        <View>
          <Button color="#a065ec" title="Add Goal" onPress={modalHandler} />
        </View>
        <GoalInput
          visible={isModalVisible}
          modalHandler={modalHandler}
          onGoalAdd={addGoalHandler}
        />

        <View style={styles.textContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteHandler}
                />
              );
            }}
            keyExtractor={(item) => item.id}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 16,
    backgroundColor : "#1e085a",
    paddingTop : 50
  },

  textContainer: {
    flex: 4,
  },
});
