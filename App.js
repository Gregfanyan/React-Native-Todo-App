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
  const [updatedInputText, setUpdatedNewInputText] = useState("");
  const [isAddMode, setIsAddMode] = useState(false);
  const [isOpened, setIsopened] = useState(false);
  const [todo, setTodo] = useState([]);

  const deleteHandler = (id) => {
    setTodo((currentState) => {
      return todo.filter((newItem) => newItem.id !== id);
    });
  };

  const addNewItemHandler = (inputValue) => {
    if (inputValue) {
      setTodo([...todo, { id: uuid(), name: inputValue }]);
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

  const changeTodoHandleClick = (id, updatedInputText) => {
    if (updatedInputText) {
      setTodo(
        todo.map((item) => {
          if (item.id === id) {
            return { ...item, name: updatedInputText };
          }
          return item;
        })
      );
    }
    setIsopened(false);
    setUpdatedNewInputText("");
  };

  const onChangeEditTodoHandler = (name) => {
    setUpdatedNewInputText(name);
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
        data={todo}
        renderItem={(todoItem) => (
          <ListItem
            setIsopened={setIsopened}
            isOpened={isOpened}
            todoItem={todoItem.item}
            onDelete={deleteHandler}
            deleteHandler={deleteHandler}
            changeTodoHandleClick={changeTodoHandleClick}
            setUpdatedNewInputText={setUpdatedNewInputText}
            updatedInputText={updatedInputText}
            onChangeEditTodoHandler={onChangeEditTodoHandler}
          />
        )}
      />
    </View>
  );
}
