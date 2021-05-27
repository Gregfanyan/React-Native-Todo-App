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
  const [item, setItem] = useState([
    {
      id: uuid(),
      name: "John",
    },
    {
      id: uuid(),
      name: "David",
    },
    {
      id: uuid(),
      name: "Luke",
    },
    {
      id: uuid(),
      name: "Ben",
    },
  ]);

  const deleteHandler = (id) => {
    setItem(item.filter((newItem) => newItem.id !== id));
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
  };

  const onChangeHandler = (name) => {
    setInputText(name);
  };

  return (
    <View style={styles.container}>
      <Header title="Header" />
      <NewItem
        addNewItemHandler={addNewItemHandler}
        onChangeHandler={onChangeHandler}
        inputText={inputText}
      />
      <FlatList
        data={item}
        renderItem={({ item }) => (
          <ListItem item={item} deleteHandler={deleteHandler} />
        )}
      />
    </View>
  );
}
