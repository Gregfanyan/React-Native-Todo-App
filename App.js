import React, { useState } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { v4 as uuid } from "uuid";

import Header from "./components/Header";
import ListItem from "./components/ListItem";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default function App() {
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

  return (
    <View style={styles.container}>
      <Header title="Header" />
      <FlatList
        data={item}
        renderItem={({ item }) => (
          <ListItem item={item} deleteHandler={deleteHandler} />
        )}
      />
    </View>
  );
}
