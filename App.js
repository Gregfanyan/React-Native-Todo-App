import React, { useState } from "react";
import { StyleSheet, Text, View, Button, FlatList, Alert } from "react-native";
import { v4 as uuid } from "uuid";

import Header from "./components/Header";
import ListItem from "./components/ListItem";
import NewItem from "./components/NewItem";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default function App() {
  const [inputText, setInputText] = useState("");
  const [isAddMode, setIsAddMode] = useState(false);
  const [item, setItem] = useState([]);

  const deleteHandler = (id) => {
    setItem((currentState) => {
      return item.filter((newItem) => newItem.id !== id);
    });
  };

  const addNewItemHandler = (inputValue) => {
    if (inputValue) {
      setItem([...item, { id: uuid(), name: inputValue }]);
    } else {
      Alert.alert("INPUT IS EMPTY", "Please fill in the input", [
        {
          text: "OK",
        },
      ]);
    }
    setInputText("");
    setIsAddMode(false);
  };

  const onChangeHandler = (name) => {
    setInputText(name);
  };

  const cancelHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.container}>
      <Header title="Todo App" />
      <Button title="Add New Item" onPress={() => setIsAddMode(true)} />
      <NewItem
        addNewItemHandler={addNewItemHandler}
        onChangeHandler={onChangeHandler}
        inputText={inputText}
        isAddMode={isAddMode}
        cancelHandler={cancelHandler}
      />
      <FlatList
        data={item}
        renderItem={({ item }) => (
          <ListItem
            item={item}
            onDelete={deleteHandler}
            deleteHandler={deleteHandler}
          />
        )}
      />
    </View>
  );
}
