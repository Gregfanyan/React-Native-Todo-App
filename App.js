import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Header from "./components/Header";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default function App() {
  const [outputText, setOututText] = useState(false);

  const changeTextHandleClick = () => {
    setOututText(!outputText);
  };

  return (
    <View style={styles.container}>
      <Header title="Header" />
    </View>
  );
}
